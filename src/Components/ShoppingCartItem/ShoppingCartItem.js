import React from 'react'
import { Observer } from 'mobx-react-lite';
import closeButton from '../../Images/x-img.png'
import headphones from '../../Images/headphones.png'
import './ShoppingCartItem.scss'

const ShoppingCartItem = (props) => {
    console.log(props);
    return <Observer>{ () => (
      <tr>  
        <td><img alt="item_img" src={closeButton}></img></td>
        <td><img alt="item_img" src={headphones}></img></td>
        <td>{props.itemName}</td>
        <td>${props.itemPrice}</td>
        <td>{props.itemQquantity}</td>
      </tr>
    )}</Observer>
}

export default ShoppingCartItem;
