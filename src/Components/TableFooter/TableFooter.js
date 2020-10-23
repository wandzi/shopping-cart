import React from 'react'
import './TableFooter.scss'

import StoreContext from '../../Store/StoreContext'

const TableFooter = () => {
    
    const store = React.useContext(StoreContext)

    return (
        <div className="table__footer">
            <button className="table__button">Update Shopping Cart</button>
        </div>
    )
}

export default TableFooter;
