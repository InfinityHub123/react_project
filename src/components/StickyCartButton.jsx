// StickyCartButton.js
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const StickyCartButton = () => {
  const { getCartItems } = useCart();
  const cartItems = getCartItems();

  if (cartItems.length === 0) return null; 

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link to="/cart">
        <button className="btn btn-primary px-6 py-3 text-white shadow-lg rounded-lg">
          View Cart ({cartItems.length})
        </button>
      </Link>
    </div>
  );
};

export default StickyCartButton;
