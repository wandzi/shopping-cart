import React from 'react'
import './ShoppingCart.scss'

import Header from '../Header/Header'
import ShoppingCartTable from '../ShoppingCartTable/ShoppingCartTable'
import CartSummary from '../CartSummary/CartSummary'

const ShoppingCart = () => {
    return (
        <div className="shopping-cart-container">
            <Header />
            <div className="shopping-cart-container__grid">
                <div className="shopping-cart-main">
                    <ShoppingCartTable />
                </div>
                <CartSummary />
            </div>
        </div>
    )
}

export default ShoppingCart;
