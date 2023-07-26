import React, { useState } from 'react';
import Timer from './Timer';
import { FaUserAlt, FaSearch } from 'react-icons/fa'; // Import the FaSearch icon for the search feature

const Nav = ({ timeRemaining, onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
  };

  return (
    <div className='flex items-center justify-between h-[10vh] w-[100vw] px-[10vw] py-5 bg-slate-800'>
      {/* Move the "Quizzy" text and icon container to the extreme left */}
      <div className='flex items-center gap-3 text-white font-semibold text-lg'>
        <div className='bg-white rounded-full w-8 h-8 flex justify-center items-center text-slate-800'>
          {/* Add your custom Quizzy icon here */}
        </div>
        <div className="flex-grow">Quizzy</div>
      </div>

      <div className='flex items-center gap-3 text-white font-semibold text-lg ml-auto'>
        {/* Search form */}
        <form onSubmit={handleSearchSubmit} className='flex items-center gap-1'>
          <button
            type='submit'
            className='bg-transparent border border-white rounded-md p-1 focus:outline-none focus:ring focus:ring-blue-300'
          >
            <FaSearch size={14} />
          </button>
          <input
            type='text'
            value={searchQuery}
            onChange={handleSearchChange}
            className='px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 text-sm'
            placeholder='Search...'
          />
        </form>
        {/* End of search form */}

        {/* Esther Aboagyewa Abankwa */}
        <span className='bg-white rounded-full w-8 h-8 flex justify-center items-center text-slate-800'>
          <FaUserAlt size={18} />
        </span>
        Esther Aboagyewa Abankwa
      </div>
      <div className='flex items-center justify-center gap-10'>
        {/* Add other components in the gap-10 if needed */}
      </div>
    </div>
  );
};

export default Nav;
