import React from 'react';
import RestaurantInfo from './RestaurantInfo';
import RestaurantOffer from './RestaurantOffer';
import RestaurantImage from './RestaurantImage';

const MenuHeader = (menu) => {
  return (
    <div className="restaurant-header-container">
      <div className="restaurant-header">
        <RestaurantImage cloudinaryImageId={menu.cloudinaryImageId} />
        <RestaurantInfo {...menu} />
        <RestaurantOffer aggregatedDiscountInfoV2={menu.aggregatedDiscountInfoV2} />
      </div>
    </div>
  );
}

export default MenuHeader;
