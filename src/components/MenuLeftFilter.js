import React from "react";

const MenuLeftFilter = ({ categories }) => {
  return (
    <div className="menu-left-filter min-w-[256px] border-r border-gray-lighter pr-8 pt-16 text-right text-sm leading-loose">
      {categories.map((item) => (
        <a href={'#' + item} key={item}>
          <div>{item}</div>
        </a>
      ))}
    </div>
  );
};

export default MenuLeftFilter;
