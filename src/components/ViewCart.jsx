import React, { useEffect, useState, useContext } from 'react';
import './Viewcart.css';
import { cartContext } from '../App';

export const ViewCart = () => {
  const { cart, setCart } = useContext(cartContext);          // ⬅ get setCart
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
  }, [cart]);

  // remove handler
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1 className="cart-heading">🛒 Your Cart</h1>

      <div className="cart-container">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          cart.map((product) => (
            <div className="cart-card" key={product.id}>
              <div className="cart-image">
                <img src={product.image_url} alt={product.name} />
              </div>

              <div className="cart-details">
                <h3>{product.name}</h3>
                <p className="price">Price: ${product.price}</p>
              </div>

              {/* 🔴 NEW Remove button */}
              <button
                className="remove-btn"
                onClick={() => removeItem(product.id)}
                aria-label={`Remove ${product.name}`}
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="total-container">
          <h2>
            Total Amount: <span>${total}</span>
          </h2>
        </div>
      )}
    </>
  );
};
