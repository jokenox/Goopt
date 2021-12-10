import React from 'react';

function Logo({ size = 'medium' }) {
  let fontSize;

  if (size == 'small') fontSize = 'text-3xl';
  else if (size == 'medium') fontSize = 'text-5xl';
  else if (size == 'large') fontSize = 'text-8xl';

  return (
    <div className={ 'font-vollkorn ' + fontSize }>
      <font className="text-gooblue">G</font>
      <font className="text-goored">o</font>
      <font className="text-gooyellow">o</font>
      <font className="text-googreen">p</font>
      <font className="text-gooblue">t</font>
    </div>
  );
}

export default Logo;

