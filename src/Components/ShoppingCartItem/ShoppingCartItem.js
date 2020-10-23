import React from 'react'
import { Observer } from 'mobx-react-lite'
import deleteButton from '../../Images/x-img.png'
import editButton from '../../Images/edit-img.png'
import headphones from '../../Images/headphones.png'
import './ShoppingCartItem.scss'

const ShoppingCartItem = (props) => {
    return <Observer>{ () => (
      <tr>  
        <td className="item__description"><span><img alt="item_delete_img" className="delete-btn" src={deleteButton}></img></span></td>
        <td className="item__description"><img alt="item_img" src={headphones}></img></td>
        <td className="item__description">{props.itemName}</td>
        <td className="item__description">${props.itemPrice}</td>
        <td className="item__description">
            <button className="item__button">+</button>
            <input value="0" className="item__input"></input>
            <button className="item__button">-</button>
            <span><img alt="item_edit_img" className="item__edit-btn" src={editButton}></img></span>
        </td>
      </tr>
    )}</Observer>
}

export default ShoppingCartItem;
