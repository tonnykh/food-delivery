import React from "react";

const SchimmerRestaurantCard = () => {
  return (
    <div className="card">
      <img className="schimmer" />
      <div className="store-name-with-cuisine">
        <h2 className="schimmer schimmer-store-name"></h2>
        <h3 className="schimmer schimmer-cuisines"></h3>
      </div>
    </div>
  );
};

export default SchimmerRestaurantCard;