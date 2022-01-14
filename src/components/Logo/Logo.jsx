import React from 'react';

function Logo({ className = '' }) {
  return (
    <div className={ 'w-max font-vollkorn ' + className }>
      <font className="text-goonavy">G</font>
      <font className="text-gooblue">o</font>
      <font className="text-goocyan">o</font>
      <font className="text-goonavy">p</font>
      <font className="text-gooviolet">t</font>
    </div>
  );
}

export default Logo;

