// components/ProductCard.js

import React from 'react';
// import './ProductCard.css';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      {product.onSale && <span className="sale-badge">Sale</span>}
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
