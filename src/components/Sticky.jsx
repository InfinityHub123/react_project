import React from 'react';
import { NavLink } from 'react-router-dom';

const Sticky = () => {
  return (
    <NavLink to="/menu"
      className="fixed right-0 top-1/2 transform -translate-y-1/2 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-l-2xl shadow-sm transition duration-300 ease-in-out">
      <span className="text-white text-base md:text-lg">To order &gt;</span>
    </NavLink>
  );
}

export default Sticky;
