import React, { useContext } from 'react';

import { AppContext } from '../contexts/AppContext/AppContext';

import SearchHeader from '../components/SearchHeader/SearchHeader';
import ResultsList from '../components/ResultsList/ResultsList';
import Button from '../components/Button/Button';

function Results() {
  const { isLoadingResults, getMoreResults } = useContext(AppContext);

  return (
    <div className="w-full h-screen">
      <SearchHeader />

      <div className="pb-6 mt-2 text-left pl-44">
        <div className="mb-6 text-sm text-googray">
          About ∞ results
        </div>

        <ResultsList />

        { !isLoadingResults &&
          <Button
            onClick={ getMoreResults }
            className="mt-6"
          >
            Load More
          </Button>
        }
      </div>
    </div>
  );
}

export default Results;
