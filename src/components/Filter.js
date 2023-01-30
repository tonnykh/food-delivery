import React from 'react';

const Filter = () => {
    return (
      <div className="filter-container sticky top-20 flex h-16 items-center border border-gray-lighter	bg-white	shadow-sm">
        <div className="filter-category my-0 mx-auto flex max-w-6xl items-center gap-12">
          <p className="text-sm text-gray-light">Relevance</p>
          <p className="text-sm text-gray-light">Delivery Time</p>
          <p className="text-sm text-gray-light">Rating</p>
          <p className="text-sm text-gray-light">Cost: Low to High</p>
          <p className="text-sm text-gray-light">Cost: High to Low</p>
          <div className="filter-sub-category flex items-center gap-1">
            <p>Filters</p>
          </div>
        </div>
      </div>
    );
}

export default Filter;