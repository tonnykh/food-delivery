import React from 'react';

function MenuBody({ children }) {
  return (
    <div className="menu-container max-w-7xl flex my-0 mx-auto justify-around text-gray-dark">
      {children}
    </div>
  );
}

export default MenuBody;
