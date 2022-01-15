import React from 'react';

import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';

function SearchHeader() {
  return (
    <header className="flex items-center content-center w-full px-6 py-2 border border-googray-light">
      <a href="/">
        <Logo className="text-3xl mr-14" />
      </a>
      <SearchBar className="w-1/2" />
    </header>
  );
}

export default SearchHeader;
