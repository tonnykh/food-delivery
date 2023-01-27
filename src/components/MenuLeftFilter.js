import React from "react";

const MenuLeftFilter = ({ categories }) => {
  return (
    <div className="menu-left-filter">
      {categories.map((item) => (
        <a href={'#' + item} key={item}>
          <div>{item}</div>
        </a>
      ))}
    </div>
  );
};

export default MenuLeftFilter;
