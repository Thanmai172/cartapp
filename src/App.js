// App.js

import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';
import './App.css';

const initialProducts = [
  { id: 1, name: 'Fancy Product', price: 40.00, image: 'https://via.placeholder.com/150', onSale: false },
  { id: 2, name: 'Special Item', price: 18.00, image: 'https://via.placeholder.com/150', onSale: true },
  { id: 3, name: 'Sale Item', price: 25.00, image: 'https://via.placeholder.com/150', onSale: true },
  { id: 4, name: 'Popular Item', price: 40.00, image: 'https://via.placeholder.com/150', onSale: false },
  // Add more products as needed
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    // Only remove the first instance of the product with the given ID
    const itemIndex = cartItems.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(itemIndex, 1);
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div className="App">
      <Header cartItemCount={cartItems.length} />
      <ProductList products={initialProducts} addToCart={addToCart} />
      <Cart items={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
