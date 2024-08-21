import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { productGenerator } from '../functions/functions';
import Footer from '../components/Footer';
import axios from 'axios';
import StickyCartButton from '../components/StickyCartButton';

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState(() => {
    return localStorage.getItem('selectedCategory') || "burgers";
  });
  const [result, setResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [itemsPerPage] = useState(3); 
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`https://burgersapi.uk/api/${searchQuery}`);
        console.log("API RESPONSE:", response.data);
        setResult(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, [searchQuery]);

  const handleClick = async (query) => {
    try {
      const response = await axios.get(`https://burgersapi.uk/api/${query}`);
      console.log("API RESPONSE:", response.data);
      setSearchQuery(query);
      setResult(response.data);
      setCurrentPage(1); 
      localStorage.setItem('selectedCategory', query); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = result.slice(indexOfFirstItem, indexOfLastItem);

  // page change function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(result.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Header />
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col md:w-1/5 mt-10 md:mt-0 md:mr-5 mb-5 md:mb-0'>
          <h1 className='text-center font-bold text-4xl mb-5'>Categories</h1>
          {['burgers', 'combos', 'salads', 'sandwiches', 'snacks', 'desserts', 'drinks', 'kidsMeals', 'sauces'].map(category => (
            <span
              key={category}
              onClick={() => handleClick(category)}
              className='cursor-pointer text-center mt-3 font-light text-3xl transition duration-300 hover:text-red-500 active:text-red-500 focus:text-red-500'
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          ))}
        </div>
        <div className='flex flex-wrap justify-around md:w-4/5'>
          {productGenerator(currentItems)}
        </div>
      </div>
  
      <div className='flex justify-center mt-5'>
        <nav>
          <ul className='flex list-none'>
            {pageNumbers.map(number => (
              <li key={number} className='mx-1'>
                <button 
                  onClick={() => paginate(number)} 
                  className={`px-3 py-2 rounded-md ${currentPage === number ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <StickyCartButton />
      <Footer />
    </>
  );
}

export default Menu;
