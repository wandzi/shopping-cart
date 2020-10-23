import React from 'react'
import { Observer } from 'mobx-react-lite'
import deleteButton from '../../Images/x-img.png'
import editButton from '../../Images/edit-img.png'

import './ShoppingCartItem.scss'

const ShoppingCartItem = (props) => {
    return <Observer>{ () => (
      <tr>  
        <td className="item__description"><span className="item__delete-btn"><img alt="item_delete_img" src={deleteButton}></img></span></td>
        <td className="item__description"><img alt="item_img" src={props.itemImage}></img></td>
        <td className="item__description">{props.itemName}</td>
        <td className="item__description">${props.itemPrice}</td>
        <td className="item__description">
            <button className="item__button">-</button>
            <input value="0" className="item__input"></input>
            <button className="item__button">+</button>
            <span className="item__edit-btn"><img alt="item_edit_img"src={editButton}></img></span>
        </td>
      </tr>
    )}</Observer>
}

export default ShoppingCartItem;
