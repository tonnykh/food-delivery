import React from 'react';
import { useParams } from 'react-router-dom';
import { useMenu } from '../utils';
import MenuHeader from './MenuHeader';
import MenuBody from './MenuBody';
import RestaurantInfo from './RestaurantInfo';
import RestaurantOffer from './RestaurantOffer';
import RestaurantImage from './RestaurantImage';

function RestaurantMenu() {
  const { restid } = useParams();
  const menu = useMenu(restid);

  return (
    <div className="menu">
      <MenuHeader>
        <RestaurantImage cloudinaryImageId={menu.cloudinaryImageId} />
        <RestaurantInfo {...menu} />
        <RestaurantOffer
          aggregatedDiscountInfoV2={menu.aggregatedDiscountInfoV2}
        />
      </MenuHeader>
      <MenuBody {...menu} />
    </div>
  );
}

export default RestaurantMenu;
