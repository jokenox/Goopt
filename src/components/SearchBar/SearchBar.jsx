import React, { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext/AppContext';

function SearchBar({ className = '' }) {
  const {
    searchTerm,
    setSearchTerm,
    gooptSearch
  } = useContext(AppContext);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      gooptSearch();
    }
  };

  return (
    <div
      className={
        'flex px-4 py-2 text-xl border rounded-full hover:shadow-md focus:shadow border-googray-light h-10 ' + className
      }
    >
      <div className="flex items-center">
        <svg
          className="w-5 h-5 text-googray"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
        >
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>
      
      <input
        className="w-full px-3 outline-none font-roboto"
        type="text"
        value={ searchTerm }
        onChange={ handleChange }
        onKeyDown={ handleKeyDown }
      />

      <div className="flex items-center">
        <svg
          className="w-5 h-5 text-googray"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
        >
          <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
