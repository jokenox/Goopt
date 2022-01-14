import React, { useContext } from 'react';

import { AppContext } from '../contexts/AppContext/AppContext';

import Logo from '../components/Logo/Logo';
import SearchBar from '../components/SearchBar/SearchBar';
import Button from '../components/Button/Button';
import LanguageSelect from '../components/LanguageSelect/LanguageSelect';

function Home() {
  const { 
    searchTerm,
    gooptSearch,
    imFeelingLucky,
  } = useContext(AppContext);

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full space-y-7">
        <Logo className="text-8xl"/>

        <SearchBar
          className="w-5/12 h-12"
          autoFocus={ true }
        />
        
        <div className="space-x-3">
          <Button
            onClick={ () => gooptSearch(searchTerm) }
            className="w-max"
          >
            Goopt Search
          </Button>

          <Button
            onClick={ () => imFeelingLucky(searchTerm) }
            className="w-max"
          >
            I'm Feeling Lucky
          </Button>
        </div>
      </div>

      <div className="flex justify-between w-full px-3 py-2 text-md font-roboto text-googray-text">
        <span className="mt-auto">Don't be human.</span>
        
        <LanguageSelect />
      </div>
    </div>
  );
}

export default Home;
