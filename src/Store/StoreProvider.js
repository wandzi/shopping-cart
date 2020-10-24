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
        subtotal: '',

        incCount: () => {
          store.itemsCount += 1
        },
        decCount: () => {
          store.itemsCount === 0 ? store.itemsCount = 0 : store.itemsCount -= 1          
        },

    }));
  
    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
}

export default StoreProvider