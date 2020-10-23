import React from 'react'
import { Observer } from 'mobx-react-lite';
import './ShoppingCartTable.scss'

import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem'
import StoreContext from '../../Store/StoreContext'

const ShoppingCartTable = () => {
    
    const store = React.useContext(StoreContext)

    return <Observer>{() => (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Qty</th>
          </tr>
        </thead>

        {store.items.map(item =>{
          return <ShoppingCartItem 
                    key={item.image}
                    itemImage={item.image}
                    itemName={item.productName} 
                    itemPrice={item.unityPrice}
                    itemQquantity={item.quantity}
                  />
        })}
        
      </table>
    )}</Observer>
}

export default ShoppingCartTable;
