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

        incCount: () => {
          store.itemsCount += 1
        },
        decCount: () => {
          store.itemsCount === 0 ? store.itemsCount = 0 : store.itemsCount -= 1          
        },
        calcSubtotal: () => {
          store.subtotal = store.itemsCount * store.items[0].unityPrice
        },
        shipping: () => {

        },

        updateCart: () => {
          store.calcSubtotal()
        }

    }));
  
    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
}

export default StoreProvider