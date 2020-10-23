import React from 'react'
import StoreProvider from './Store/StoreProvider'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'

import './App.css'


function App() {
  return (
    <div className="App">
      <StoreProvider>
        <ShoppingCart />
      </StoreProvider>
    </div>
  );
}

export default App;
