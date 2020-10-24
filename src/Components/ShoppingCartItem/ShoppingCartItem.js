import React from 'react'
import { Observer } from 'mobx-react-lite'
import deleteButton from '../../Images/x-img.png'
import editButton from '../../Images/edit-img.png'

import StoreContext from '../../Store/StoreContext'
import './ShoppingCartItem.scss'

const ShoppingCartItem = (props) => {

  const store = React.useContext(StoreContext)

  return <Observer>{ () => (
    <tr> 
      <td className="item__description">
        <button className="item__delete-btn" onClick={() => store.removeItem(props.itemId)}>
          <img alt="item_delete_img" src={deleteButton}></img>
        </button>
      </td>
      <td className="item__description"><img alt="item_img" src={props.itemImage}></img></td>
      <td className="item__description">{props.itemName}</td>
      <td className="item__description">${props.itemPrice}</td>
      <td className="item__description">
          <button className="item__button" onClick={store.decCount}>-</button>
          <input type="text" onChange={() =>{}} value={store.itemsCount} className="item__input"></input>
          <button className="item__button" onClick={store.incCount}>+</button>
          <button className="item__edit-btn" onClick={store.updateCart}>
            <img className="item__edit-img" alt="item_edit_img" src={editButton}></img>
          </button>
      </td>
    </tr>
  )}</Observer>
}

export default ShoppingCartItem;
