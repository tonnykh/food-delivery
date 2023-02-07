import React, { useState } from 'react';

const MenuLeftFilter = ({ categories }) => {
  const [categoryColorChange, setCategoryColorChange] = useState('');

  return (
    <div className="menu-left-filter min-w-[256px] border-r border-gray-lighter pr-8 pt-20 text-right text-sm leading-loose sticky top-0 ">
      {categories.map((item) => (
        <a href={'#' + item} key={item}>
          {categoryColorChange === item ? (
            <button
              className="block w-full cursor-pointer text-end text-orange hover:text-orange font-bold"
              onClick={() =>
                categoryColorChange !== { item }
                  ? setCategoryColorChange(item)
                  : setCategoryColorChange('')
              }
            >
              {item}
            </button>
          ) : (
            <button
              className="block w-full cursor-pointer text-end hover:text-orange"
              onClick={() =>
                categoryColorChange !== { item }
                  ? setCategoryColorChange(item)
                  : setCategoryColorChange('')
              }
            >
              {item}
            </button>
          )}
        </a>
      ))}
    </div>
  );
};

export default MenuLeftFilter;

