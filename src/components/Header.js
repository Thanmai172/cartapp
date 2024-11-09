// components/Header.js

import React from 'react';
// import './Header.css';

function Header({ cartItemCount }) {
  return (
    <header className="header">
      <h1>Shop in Style</h1>
      <div className="cart-icon">
        Cart ({cartItemCount})
      </div>
    </header>
  );
}

export default Header;
