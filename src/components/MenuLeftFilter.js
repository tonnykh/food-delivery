import React from "react";

const MenuLeftFilter = ({ categories }) => {
  return (
    <div className="menu-left-filter">
      {categories.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default MenuLeftFilter;
