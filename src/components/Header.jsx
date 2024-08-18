import React from 'react'
import {Link} from "react-router-dom";
import "./Header.css";
export const Header = ({cart}) => {
  return (
    <div className='navbar'>
        <div className="logo">FOOD CART</div>
        <ul>
            <li>
                <Link to={"/"}>HOME</Link>
            </li>
            <li>
                <Link to={"/Cart"}> <span className='cart-count'>{cart.length}</span> VIEW CART🛒</Link>
            </li>
        </ul>
    </div>
  )
}
