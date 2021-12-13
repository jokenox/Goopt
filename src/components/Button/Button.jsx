import React from 'react';

function Button({ children, onClick, className = '' }) {
  return (
    <button
      onClick={ onClick }
      className={
        className +
        ' px-4 py-2 border rounded-sm font-roboto hover:border-googray-light bg-googray-button border-googray-button hover:shadow-sm'
      }
    >
      <span>
        { children }
      </span>
    </button>
  );
}

export default Button;
