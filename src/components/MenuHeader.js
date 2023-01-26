import React from 'react';

const MenuHeader = ({ children }) => {
  return (
    <div className="restaurant-header-container">
      <div className="restaurant-header">
        {children}
      </div>
    </div>
  );
};

export default MenuHeader;
