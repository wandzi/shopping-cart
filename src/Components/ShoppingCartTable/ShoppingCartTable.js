import React from 'react'
import { Observer } from 'mobx-react-lite';
import './ShoppingCartTable.scss'

import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem'
import TableHeader from '../TableHeader/TableHeader'
import TableFooter from '../TableFooter/TableFooter'
import StoreContext from '../../Store/StoreContext'


const ShoppingCartTable = () => {
    
    const store = React.useContext(StoreContext)

    return <Observer>{() => (
      <>
        <table className="table">
          
          <TableHeader />

          {store.items.map(item =>{
            return <ShoppingCartItem 
                      key={item.id}
                      itemId={item.id}
                      itemImage={item.image}
                      itemName={item.productName} 
                      itemPrice={item.unityPrice}
                    />
          })}

        </table>
        <TableFooter />
      </>
    )}</Observer>
}

export default ShoppingCartTable;
