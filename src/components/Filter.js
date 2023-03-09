import React from 'react';
import { Link } from 'react-router-dom';

const Filter = ({ mainCategories}) => {
  if (mainCategories === undefined) return;

  return (
    <div className="filter-container sticky top-20 flex h-16 items-center border border-gray-lighter	bg-white	shadow-sm">
      <div className="filter-category my-0 mx-auto flex max-w-6xl items-center gap-12">
        {mainCategories.map((category) => (
          <Link to={category?.key} key={category?.key}>
            <button className="text-sm text-gray-light">
              {category?.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Filter;
