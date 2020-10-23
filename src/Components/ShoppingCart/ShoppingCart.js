import React from 'react'
import './ShoppingCart.scss'

import Header from '../Header/Header'
import ShoppingCartTable from '../ShoppingCartTable/ShoppingCartTable'

const ShoppingCart = () => {
    return (
        <div className="shopping-cart-container">
            <Header />
            <div className="shopping-cart-container__main-shopping-cart">
                <ShoppingCartTable />
            </div>
        </div>
    )
}

export default ShoppingCart;
