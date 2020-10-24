import React from 'react'
import { Observer } from 'mobx-react-lite'
import './TableFooter.scss'

import StoreContext from '../../Store/StoreContext'

const TableFooter = () => {

    const store = React.useContext(StoreContext)

    return <Observer>{ () => (
        <div className="table__footer">
            <button className="table__button" onClick={store.updateCart}>Update Shopping Cart</button>
        </div>
    )}</Observer>
}

export default TableFooter;
