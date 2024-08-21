import React from 'react';
import Header from '../components/Header';
import Sticky from '../components/Sticky';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />

      <div className='relative flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 py-12 bg-gradient-to-r from-gray-50 to-gray-100'>
        <div className='relative group w-full md:w-1/2 p-4'>
          <a href="/login">
            <img className='w-full h-auto rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-500 ease-out' src="images/burgerclub.jpg" alt="Burger Club" />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg'>
              <span className='text-white text-xl font-semibold'>Explore Burger Club</span>
            </div>
          </a>
        </div>
        <div className='relative group w-full md:w-1/2 p-4'>
          <a href="https://play.google.com/store/apps?hl=en">
            <img className='w-full h-auto rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-500 ease-out' src="images/burgerapp.jpg" alt="Burger App" />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg'>
              <span className='text-white text-xl font-semibold'>Download Our App</span>
            </div>
          </a>
        </div>
      </div>

      <div className='relative'>
        <img className='w-full h-auto' src="../images/peoplehappy.webp" alt="Happy People" />
        <div className='absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black via-black to-transparent bg-opacity-60 p-6'>
          <div className='flex flex-col items-center mb-6'>
            <h2 className='text-white text-3xl md:text-4xl font-extrabold mb-4 text-center animate__animated animate__fadeIn animate__delay-1s'>
              Craving Something Wild?
            </h2>
            <p className='text-yellow-300 text-base md:text-lg mb-6 text-center animate__animated animate__fadeIn animate__delay-2s'>
              Get your taste buds dancing with our sizzling burgers. Come on, don't be shy — dive into flavor overload!
            </p>
          </div>
        </div>
      </div>

      <div className='py-12 bg-white'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800'>What Our Customers Say</h2>
        <div className='max-w-md md:max-w-3xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
              <p className='text-gray-600 mb-4'>"The best burgers I've ever had! The flavors are incredible and the service is top-notch."</p>
              <span className='block text-gray-800 font-semibold mb-2'>- John Doe</span>
              <div className='flex items-center'>
                <span className='text-yellow-400'>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
              <p className='text-gray-600 mb-4'>"Love the spicy jalapeño burger! It's the perfect level of heat and flavor."</p>
              <span className='block text-gray-800 font-semibold mb-2'>- Jane Smith</span>
              <div className='flex items-center'>
                <span className='text-yellow-400'>⭐⭐⭐⭐</span>
              </div>
            </div>
            <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
              <p className='text-gray-600 mb-4'>"The new BBQ burger is out of this world! Highly recommend it to anyone who loves smoky flavors."</p>
              <span className='block text-gray-800 font-semibold mb-2'>- Alex Johnson</span>
              <div className='flex items-center'>
                <span className='text-yellow-400'>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
              <p className='text-gray-600 mb-4'>"Fast service and even better food! The cheeseburgers are a must-try."</p>
              <span className='block text-gray-800 font-semibold mb-2'>- Emily Davis</span>
              <div className='flex items-center'>
                <span className='text-yellow-400'>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-12 bg-white'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800'>Stay Updated</h2>
        <p className='text-base md:text-lg text-gray-600 text-center mb-6'>
          Sign up for our newsletter to get the latest updates, exclusive offers, and more delivered straight to your inbox.
        </p>
        <div className='max-w-md mx-auto'>
          <form className='flex flex-col md:flex-row'>
            <input
              type='email'
              placeholder='Your email address'
              className='flex-1 px-4 py-2 border rounded-md mb-4 md:mb-0 md:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            <button
              type='submit'
              className='bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300'>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <Sticky />
      <Footer />
    </>
  );
};

export default HomePage;
