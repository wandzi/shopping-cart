import React from 'react'
import { Observer } from 'mobx-react-lite'
import './Header.scss'

import StoreContext from '../../Store/StoreContext'

const Header = () => {

    const store = React.useContext(StoreContext)
    
    return <Observer>{ () => (
        <header className="header">
            <h2 className="header__shopping-cart-title">Shopping Cart</h2>
            <button className="header__button" onClick={store.toogleCart}>Proceed to checkout</button>
        </header>
    )}</Observer>
}

export default Header;
