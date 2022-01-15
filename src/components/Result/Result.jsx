import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Result({ title, text }) {
  let [titleColor, setTitleColor] = useState('text-goolink');

  const handleClick = () => {
    setTitleColor('text-goolink-visited');
  };

  return (
    <div className="w-6/12 text-left font-roboto">
      <Link
        to={ `/site?title=${title}&text=${text}` }
        target="_blank"
        className={
          titleColor +
          ' text-xl'
        }
        onClick={ handleClick }
        onContextMenu={ handleClick }
      >
        { title }
      </Link>

      <p className="text-md text-googray-text">
        { text }
      </p>
    </div>
  );
}

export default Result;
