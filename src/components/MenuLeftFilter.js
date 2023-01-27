import React from "react";

const MenuLeftFilter = ({ categories }) => {
  return (
    <div className="menu-left-filter">
      {categories.map((item) => (
        <a href={"#" + item}>
          <div key={item}>{item}</div>
        </a>
      ))}
    </div>
  );
};

export default MenuLeftFilter;
