import React from "react";
import RestaurantInfo from "./RestaurantInfo";
import Offer from "./Offer";
import RestaurantImage from "./RestaurantImage";

const MenuHeader = (menu) => {
  return (
    <div className="restaurant-header-container">
      <div className="restaurant-header">
        <RestaurantImage cloudinaryImageId={menu.cloudinaryImageId} />
        <RestaurantInfo {...menu} />
        <Offer aggregatedDiscountInfoV2={menu.aggregatedDiscountInfoV2} />
      </div>
    </div>
  );
};

export default MenuHeader;
