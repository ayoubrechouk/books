import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import Footer from './components/Footer';
import './App.css';

function App() {
  // State to manage the cart count
  const [cartCount, setCartCount] = useState(0);

  // Function to pass down as a prop to update the cart
  const handleAddToCart = (product) => {
    setCartCount(cartCount + 1);
    // You could also add logic here to show a toast notification
    console.log(`Added ${product.title} to cart!`);
  };

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Hero />
      <ProductGallery addToCart={handleAddToCart} />
      <Footer />
    </div>
  );
}

export default App;