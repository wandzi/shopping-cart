import React from 'react'

import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <h2 className="header__shopping-cart-title">Shopping Cart</h2>
            <button className="header__button">Proceed to checkout</button>
        </header>
    )
}

export default Header;
