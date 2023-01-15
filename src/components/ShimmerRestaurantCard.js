import React from "react";

const ShimmerRestaurantCard = () => {
  return (
    <div className="card">
      <img className="shimmer shimmer-store-img" />
      <div className="store-name-with-cuisine">
        <h2 className="shimmer shimmer-store-name"></h2>
        <h3 className="shimmer shimmer-cuisines"></h3>
      </div>
    </div>
  );
};

export default ShimmerRestaurantCard;