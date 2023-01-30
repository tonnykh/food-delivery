import React from 'react';

const MenuHeader = ({ children }) => {
  return (
    <div className="restaurant-header-container bg-gray-dark">
      <div className="restaurant-header h-64 max-w-7xl flex my-0 mx-auto  items-center justify-around text-white">
        {children}
      </div>
    </div>
  );
};

export default MenuHeader;
