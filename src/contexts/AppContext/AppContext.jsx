import React, { createContext, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import OpenAI from 'openai-api';

import formatResults from '../../utils/formatResults';
import { SearchTemplate, ArticleTemplate } from '../../utils/templates';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const openai = new OpenAI(process.env.REACT_APP_OPENAI_API_KEY);

  const [language, setLanguage] = useState((localStorage.getItem('language') || 'en')); 
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [isLoadingArticle, setIsLoadingArticle] = useState(false);
  const lastResultsString = useRef('');

  const selectLanguage = (lang) => {
    localStorage.setItem('language', lang);
    setLanguage(lang);
  };

  const generateArticleText = async (text) => {
    let gptResponse;
    
    setIsLoadingArticle(true);

    try {
      gptResponse = await openai.complete({
        engine: 'text-davinci-003',
        prompt: text.trim(),
        maxTokens: 500,
        temperature: 0.7,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 2,
        bestOf: 1,
        n: 1,
        stream: false
      });
  
      console.log(gptResponse.data.choices[0].text);
  
      setIsLoadingArticle(false);
  
      return gptResponse.data.choices[0].text;
    } catch (error) {
      alert('There are problems accessing the API');
      window.location.href = '/';
    }
  };

  const generateResults = async (searchTerm) => {
    const lastResults = lastResultsString.current;

    const query = getSearchTemplate() + searchTerm + '\n\n{' + lastResults;

    let gptResponse;

    setIsLoadingResults(true);

    try {
      gptResponse = await openai.complete({
        engine: 'text-davinci-001',
        prompt: query,
        maxTokens: 1000,
        temperature: 1,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 2,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ['"""']
      });

      //console.log(gptResponse.data.choices[0].text);
      
      lastResultsString.current = gptResponse.data.choices[0].text;

      setIsLoadingResults(false);

      return gptResponse.data.choices[0].text;
    } catch (error) {
      alert('There are problems accessing the API');
      window.location.href = '/';
    }
  };

  const getResults = async (term) => {
    setSearchResults([]);

    let results = formatResults(await generateResults(term));
    let numberOfResults = results.length;

    setSearchResults(results);

    if (numberOfResults < 3) getMoreResults(numberOfResults);
  };

  const getMoreResults = async (numberOfPrevResults) => {
    let newResults = formatResults(await generateResults(searchTerm));
    let numberOfResults = numberOfPrevResults + newResults.length;

    setSearchResults(prev => [...prev, ...newResults]);

    if (numberOfResults < 3) getMoreResults(numberOfResults);
  };

  const gooptSearch = (term) => {
    if (term.trim().length > 0) {
      navigate('/results?search=' + term.trim());
    
      getResults(term.trim());
    }
  };

  const imFeelingLucky = async (term) => {
    if (searchTerm.trim().length > 0) {
      navigate('/site?term=' + term.trim());

      await getResults(term.trim());
    }
  };

  const getSearchTemplate = (lang = language) => {
    switch (lang) {
      case 'en':
        return SearchTemplate.en;
      
      case 'es':
        return SearchTemplate.es;

      case 'eo':
        return SearchTemplate.eo;

      default:
        return false;
    };
  };

  const getArticleTemplate = (lang = language) => {
    switch (lang) {
      case 'en':
        return ArticleTemplate.en;
      
      case 'es':
        return ArticleTemplate.es;

      case 'eo':
        return ArticleTemplate.eo;

      default:
        return false;
    };
  };

  return (
    <AppContext.Provider value={{
      language,
      selectLanguage,
      searchTerm,
      setSearchTerm,
      searchResults,
      isLoadingResults,
      isLoadingArticle,
      generateArticleText,
      gooptSearch,
      getMoreResults,
      imFeelingLucky,
      getArticleTemplate
    }}>
      { children }
    </AppContext.Provider>
  );


};

export { AppContext, AppContextProvider };
