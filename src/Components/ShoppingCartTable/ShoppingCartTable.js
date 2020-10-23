import React from 'react'
import { Observer } from 'mobx-react-lite';
import './ShoppingCartTable.scss'

import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem'
import StoreContext from '../../Store/StoreContext'

const ShoppingCartTable = () => {
    
    const store = React.useContext(StoreContext)

    return <Observer>{() => (
      <>
        <table className="table">
          <thead className="table__thead">
            <tr>
              <th></th>
              <th></th>
              <th className="table__header-description">Product Name</th>
              <th className="table__header-description">Unit Price</th>
              <th className="table__header-description">Qty</th>
            </tr>
          </thead>

          {store.items.map(item =>{
            return <ShoppingCartItem 
                      key={item.image}
                      itemImage={item.image}
                      itemName={item.productName} 
                      itemPrice={item.unityPrice}
                    />
          })}
        </table>
        <div className="table__footer">
          <button className="table__button">Update Shopping Cart</button>
        </div>
      </>
    )}</Observer>
}

export default ShoppingCartTable;
