import React from 'react';

function Logo({ className = '' }) {
  return (
    <div className={ 'w-max font-vollkorn ' + className }>
      <font className="text-gooblue">G</font>
      <font className="text-goored">o</font>
      <font className="text-gooyellow">o</font>
      <font className="text-googreen">p</font>
      <font className="text-gooblue">t</font>
    </div>
  );
}

export default Logo;

