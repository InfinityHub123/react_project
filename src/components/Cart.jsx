import React from 'react';
import { useCart } from '../contexts/CartContext';


const Cart = () => {
  const { getCartItems, removeFromCart } = useCart();
  const cartItems = getCartItems();

  if (cartItems.length === 0) {
    return (
      <>
      
        <div className="container mx-auto py-10">
          <h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1>
          <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
        </div>
      
      </>
    );
  }

  return (
    <>
     
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1>
        <div className="flex flex-col items-center">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-md p-4 mb-6"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
                  <p className="text-lg text-gray-600 mb-4">{item.description}</p>
                  <p className="text-xl font-bold mb-4">${item.price.toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-between items-center">
          <p className="text-2xl font-bold">
            Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </p>
          <button className="btn btn-primary px-6 py-3 text-white rounded-lg">Checkout</button>
        </div>
      </div>
    
    </>
  );
};

export default Cart;
