import React from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import StoreContext from './StoreContext';

import headphones from '../Images/headphones.png'

const StoreProvider = ({ children }) => {

    const store = useLocalObservable(() => ({

      items: [
          {
              image: headphones,
              productName: 'Headphones',
              unityPrice: 11.90,
          }
        ],
      
    }));
  
    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
}

export default StoreProvider