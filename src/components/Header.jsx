import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = ({ cart }) => {
  return (
    <header className="navbar">
      <div className="logo">🍔 FOOD CART</div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="cart-link">
            <Link to="/Cart">
              View Cart 🛒
              <span className="cart-count">{cart.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
