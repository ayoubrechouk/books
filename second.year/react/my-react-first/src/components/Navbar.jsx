import React from 'react';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <a href="/" className="logo">Tazerzitt</a>
      <div className="nav-links">
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <span className="cart-container">
          🛒 Cart
          <span className="cart-badge">{cartCount}</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;