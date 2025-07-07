import React, { useContext } from 'react';
import './product.css';
import { cartContext } from '../App';

export const Product = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);

  const addCart = () => {
    setCart([...cart, product]);
  };

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image_url} alt={product.name} />
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">Price: <strong>${product.price}</strong></p>

        {cart.includes(product) ? (
          <button className="btn remove" onClick={removeCart}>Remove From Cart</button>
        ) : (
          <button className="btn add" onClick={addCart}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
