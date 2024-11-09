// components/Cart.js

import React from 'react';
import CartItem from './CartItem';
// import './Cart.css';

function Cart({ items, removeFromCart }) {
  const total = items.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map((item, index) => (
          <CartItem key={index} item={item} removeFromCart={removeFromCart} />
        ))
      )}
      <p>Total: ${total}</p>
    </div>
  );
}

export default Cart;
