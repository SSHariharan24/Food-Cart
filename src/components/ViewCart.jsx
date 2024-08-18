import React, { useEffect, useState,useContext } from 'react'
import './Viewcart.css';
import { cartContext } from '../App';
export const ViewCart = () => {

  const {cart} = useContext(cartContext);

  const [total,setTotal] = useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.price),0))
  },[cart])
  return (
    <>
    <h1 className='cart-heading'>Carts Products</h1>
    <div className='cart-container'>
      {
        cart.map((product)=>(
          <div className="cart-products" key={product.id}>
          <div className="img">
            <img src={product.image_url} alt="image"/>
          </div>
          <div className="cart-product-details">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
          </div>
        </div>
        ))
      }
       </div>
       <h2 className='card-amt'>Total Amount :${total}</h2>
    </>
  )
}
