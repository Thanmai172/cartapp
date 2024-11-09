// components/CartItem.js

import React from 'react';
// import './CartItem.css';

function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-item">
      <span>{item.name} - ${item.price.toFixed(2)}</span>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
