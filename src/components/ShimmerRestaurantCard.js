import React from 'react';

const ShimmerRestaurantCard = () => {
  return (
    <div className="card max-w-[280px] p-4">
      <img className="shimmer shimmer-store-img h-36 w-60 " />
      <div className="store-name-with-cuisine py-2 ">
        <h2 className="shimmer shimmer-store-name h-2 w-[60%]"></h2>
        <h3 className="shimmer shimmer-cuisines w-60 h-2"></h3>
      </div>
    </div>
  );
};

export default ShimmerRestaurantCard;
