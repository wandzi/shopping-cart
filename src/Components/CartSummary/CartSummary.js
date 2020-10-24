import React from 'react'
import { Observer } from 'mobx-react-lite'
import './CartSummary.scss'

import StoreContext from '../../Store/StoreContext'

const CartSummary = () => {

    const store = React.useContext(StoreContext)

    return <Observer>{ () => (
        <div className="cart-summar-container">
            <div className="cart-summary__shipping">
                <span>Shipping:</span> 
                <span>$23.80</span>    
            </div>

            <div className="cart-total-container">
                <div className="cart-summary__total">Cart totals</div>
                <div className="cart-summary__description"> 
                    <span className="cart-summary__title">Subtotal</span> 
                    <span>$</span>
                </div>
                <hr className="horrizontal-line"/>
                <div className="cart-summary__description">
                    <span className="cart-summary__title">Grand total</span> 
                    <span className="cart-summary">$23.80</span>
                </div>
                <button className="cart-total__button ">Proceed to checkout</button>
            </div>
        </div>
    )}</Observer>
}

export default CartSummary;
