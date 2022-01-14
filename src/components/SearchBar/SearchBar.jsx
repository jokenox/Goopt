import React, { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext/AppContext';

function SearchBar({ className = '', autoFocus = false }) {
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
      gooptSearch(searchTerm);
    }
  };

  const clearSearchBarText = () => {
    setSearchTerm('');

    document.querySelector('input').focus();
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
        autoFocus={ autoFocus }
      />

      { searchTerm.length > 0 &&
        <div className="flex items-center">
          <button
            onClick={ clearSearchBarText }
          >
            <svg
              className="w-5 h-5 text-googray hover:text-googray-text"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
            >
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      }
    </div>
  );
}

export default SearchBar;
