import React, { useContext, useEffect, useState } from 'react';

import { AppContext } from '../contexts/AppContext/AppContext';

import LoadingArticle from '../components/LoadingArticle/LoadingArticle';
import ReadMore from '../components/ReadMore/ReadMore';

function Site() {
  const {
    searchResults,
    generateArticleText,
    isLoadingArticle,
    getArticleTemplate
  } = useContext(AppContext);
  
  const queryParams = new URLSearchParams(window.location.search);

  let [title, setTitle] = useState(queryParams.get('title'));
  let initialText = queryParams.get('text');
  
  let [text, setText] = useState(getArticleTemplate() + initialText);

  useEffect(() => {
    initArticle();
  });

  const initArticle = () => {
    if (searchResults[0] && !title) {
      setTitle(searchResults[0].title);
      setText(getArticleTemplate() + searchResults[0].text);
    }
    
    if (title && text.length < 800) {
      loadArticle();
    }
  };

  const loadArticle = async () => {
    let articleText = text.replace(/\s*...$/, '');

    let articleNewText = await generateArticleText(articleText);
      
    setText(articleText + articleNewText);
  };

  const formatArticleText = (text) => {
    let paragraphs = text.slice(text.indexOf('"""') + 4).split('\n');

    let formattedText = paragraphs.map((paragraph, index) => {
      return (
        <p key={ index } className="mb-4">
          { paragraph }
        </p>
      )
    });

    return (
      <div>
        { formattedText }
      </div>
    );
  };


  return (
    <div className="flex justify-center py-12">
      <div className="w-6/12 text-left">
        <h1 className="mb-6 text-5xl font-montserrat">
          { title }
        </h1>

        <p className="text-xl font-roboto">
          { text !== getArticleTemplate() + initialText &&
            formatArticleText(text)
          }

          { (isLoadingArticle || !title) &&
            <LoadingArticle />
          }
        </p>

        { (!isLoadingArticle && title) &&
          <ReadMore onClick={ loadArticle } />
        }
      </div>
    </div>
  );
}

export default Site;
