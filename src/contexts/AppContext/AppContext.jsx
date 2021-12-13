import React, { createContext, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState();

  const gooptSearch = () => {
    navigate('/results?search=' + searchTerm);
  };

  const imFeelingLucky = () => {
    navigate('/site?search=' + searchTerm);
  };

  return (
    <AppContext.Provider value={{
      searchTerm,
      setSearchTerm,
      gooptSearch,
      imFeelingLucky
    }}>
      { children }
    </AppContext.Provider>
  );


};

export { AppContext, AppContextProvider };