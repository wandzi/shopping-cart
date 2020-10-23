import React from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import StoreContext from './StoreContext';

const StoreProvider = ({ children }) => {

    const store = useLocalObservable(() => ({

      items: [
          {
              productName: 'Headphones',
              unityPrice: 11.90,
              quantity: 1
          }
        ],
      
    }));
  
    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
}

export default StoreProvider