import React from 'react';

const ShimmerRestaurantCard = () => {
  return (
    <div
      className="my-0 mx-auto flex max-w-7xl flex-wrap gap-8 pt-8 pl-8"
      data-testid="shimmer"
    >
      {Array(10)
        .fill('')
        .map((e, index) => (
          <div className="card max-w-[280px] animate-pulse p-4" key={index}>
            <img className="h-36 w-60 animate-pulse bg-gray-lighter" />
            <div className="store-name-with-cuisine py-4 ">
              <h2 className="h-3 w-[60%] bg-gray-lighter"></h2>
              <h3 className="my-2 h-3 w-60 bg-gray-lighter"></h3>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerRestaurantCard;
