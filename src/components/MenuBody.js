import React from 'react';

function MenuBody({ children }) {
  return (
    <div className="menu-container my-0 mx-auto flex max-w-7xl justify-around text-gray-dark">
      {children}
    </div>
  );
}

export default MenuBody;
