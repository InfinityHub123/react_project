import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/*Desktop*/}
      <div className="hidden md:flex flex-col md:flex-row justify-between items-center bg-black text-white p-4">
        <div className="flex items-center justify-start">
          <h1 className="text-4xl md:text-5xl font-serif">MYBURGER</h1>
        </div>
        <nav className='flex flex-col md:flex-row gap-4 md:gap-10 my-3'>
          <NavLink className='text-xl md:text-3xl transition duration-300 hover:text-red-500 font-serif' to="/">Home</NavLink>
          <NavLink className='text-xl md:text-3xl transition duration-300 hover:text-red-500 font-serif' to="/menu">Menu</NavLink>
          <NavLink className='text-xl md:text-3xl transition duration-300 hover:text-red-500 font-serif' to="/about">Our Story</NavLink>
          <NavLink className='text-xl md:text-3xl transition duration-300 hover:text-red-500 font-serif' to="/login">Log In</NavLink>
          <NavLink className='text-xl md:text-3xl transition duration-300 hover:text-red-500 font-serif' to="/contact">Contact Us</NavLink>
        </nav>
      </div>

      {/*Mobile*/}
      <div className="md:hidden navbar bg-base-100 bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-md ${isMenuOpen ? 'block' : 'hidden'}`}
            >
              <li>
                <NavLink
                  to="/"
                  exact
                  className="hover:text-yellow-400 transition duration-300"
                  activeClassName="text-yellow-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  exact
                  className="hover:text-yellow-400 transition duration-300"
                  activeClassName="text-yellow-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  exact
                  className="hover:text-yellow-400 transition duration-300"
                  activeClassName="text-yellow-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Story
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  exact
                  className="hover:text-yellow-400 transition duration-300"
                  activeClassName="text-yellow-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  exact
                  className="hover:text-yellow-400 transition duration-300"
                  activeClassName="text-yellow-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <NavLink to="/" exact className="btn btn-ghost text-xl">
            <h1 className="text-4xl md:text-5xl font-serif text-white">MYBURGER</h1>

          </NavLink>
        </div>

        <div className="navbar-end">
          
       
        </div>
      </div>
    </header>
  );
};

export default Header;
