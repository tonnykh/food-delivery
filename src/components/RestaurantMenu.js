import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMenu } from '../utils';
import MenuHeader from './MenuHeader';
import MenuBody from './MenuBody';
import RestaurantInfo from './RestaurantInfo';
import RestaurantOffer from './RestaurantOffer';
import RestaurantImage from './RestaurantImage';
import MenuLeftFilter from './MenuLeftFilter';
import MenuCenterList from './MenuCenterList';
import MenuRightCart from './MenuRightCart';

function RestaurantMenu() {
  const [vegMenu, setVegMenu] = useState(false);

  const { restid } = useParams();
  const menu = useMenu(restid);
  const menuItems = menu?.menu?.items;
  if (!menuItems) return null;

  const categories = menuItems !== undefined && [
    ...new Set(Object.values(menuItems).map((item) => item.category)),
  ];

  console.log(menu, 'MENU REST');

  console.log(vegMenu, 'MENU VEG SET');

  const handleVegMenu = () => {
    setVegMenu(!vegMenu);
    console.log('CLICK');
  };

  return (
    <main className="menu">
      <MenuHeader>
        <RestaurantImage cloudinaryImageId={menu.cloudinaryImageId} />
        <RestaurantInfo
          {...menu}
          handleVegMenu={handleVegMenu}
          isVegMenu={vegMenu}
        />
        <RestaurantOffer
          aggregatedDiscountInfoV2={menu.aggregatedDiscountInfoV2}
        />
      </MenuHeader>

        <MenuBody>
          <MenuLeftFilter categories={categories} />
          <MenuCenterList
            categories={categories}
            availability={menu?.availability}
            menu={menuItems}
            restaurantDetails={menu}
            isVegMenu={vegMenu}
          />
          <MenuRightCart />
        </MenuBody>
    </main>
  );
}

export default RestaurantMenu;
