import React from 'react'
import "./product.css"
import { useContext } from 'react';
import { cartContext } from '../App';

export const Product = ({product}) => {

const {cart,setCart} = useContext(cartContext)

    const addCart = () =>{
        setCart([...cart, product]);
    };
    const removeCart = () => {
        setCart(cart.filter((c)=> c.id !== product.id));
    };
  return (
    <div className='product'>
        <div className="image">
            <img src={product.image_url} alt={product.name} />
        </div>

        <div className="details">
        <h3>{product.name}</h3>
        <p> Price :${product.price}</p>
        
        {cart.includes(product)?(<button className='btnRemove' onClick={removeCart}>Remove From Cart</button>):(< button onClick={addCart}>Add To Cart</button>)}
    
        </div>
        
    </div>
  )
}
