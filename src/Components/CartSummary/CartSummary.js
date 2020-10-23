import React from 'react'

import './CartSummary.scss'

const CartSummary = () => {
    return (
        <div className="cart-summar-container">
            <div className="cart-summary__shipping">
                <span>Shipping:</span> 
                <span>$23.80</span>    
            </div>

            <div className="cart-total-container">
                <div className="cart-summary__total">Cart totals</div>
                <div className="cart-summary__description"> 
                    <span className="cart-summary__title">Subtotal</span> 
                    <span>$23.80</span>
                </div>
                <hr className="horrizontal-line"/>
                <div className="cart-summary__description">
                    <span className="cart-summary__title">Grand total</span> 
                    <span className="cart-summary">$23.80</span>
                </div>
                <button className="cart-total__button ">Proceed to checkout</button>
            </div>
        </div>
    ) 
}

export default CartSummary;
