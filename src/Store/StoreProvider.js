import React from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import StoreContext from './StoreContext';

import headphones from '../Images/headphones.png'

const StoreProvider = ({ children }) => {

    const store = useLocalObservable(() => ({

        items: [
          {
              id: 'ACXaoa87750a&*(^G',
              image: headphones,
              productName: 'Headphones',
              unityPrice: 11.90,
          }
        ],  

        itemsCount: 0,
        shippingCost: 0,
        subtotal: 0,
        grandTotal: 0,

        incCount: () => {
          store.itemsCount += 1
        },
        decCount: () => {
          store.itemsCount === 0 ? store.itemsCount = 0 : store.itemsCount -= 1          
        },

        calcSubtotal: () => {
          let result = Math.round((store.itemsCount * store.items[0].unityPrice) * 100) / 100
          store.subtotal = result
        },
        calcGrandTotal: () => {
          let result = Math.round((store.subtotal + store.shippingCost) * 100) / 100
          store.grandTotal = result
        },
        calcShipping: () => {
          store.subtotal <= 100 ? store.shippingCost = 23.80 : store.shippingCost = 0
        },

        deleteItem: () => {
          
        },

        updateCart: () => {
          if(store.itemsCount !== 0) {
            store.calcSubtotal()
            store.calcShipping()
            store.calcGrandTotal()
          } else {
            store.shippingCost = 0
            store.subtotal = 0
            store.grandTotal = 0
          }
        }

    }));
  
    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
}

export default StoreProvider