import React from 'react'
import { Observer } from 'mobx-react-lite';
import './ShoppingCartTable.scss'
import TableResults from '../TableResults/TableResults'
import StoreContext from '../../Store/StoreContext'

const ShoppingCartTable = () => {
    
    const store = React.useContext(StoreContext)

    return <Observer>{() => (
      <>
        {store.submitHandler === false ? <TableResults /> : <div className="submitted-message">Your order has been submitted successfully.</div>}
      </>
    )}</Observer>
}

export default ShoppingCartTable;
