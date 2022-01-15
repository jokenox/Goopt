import React from 'react';

function ReadMore({ onClick, className }) {
  return (
    <button
      onClick={ onClick }
      className={
        className +
        ' text-lg text-gooblue hover:text-goolink font-roboto'
      }
    >
      Read More...
    </button>
  );
}

export default ReadMore;
