import React from 'react';
import { useParams } from 'react-router-dom';
import { useMenu } from '../utils';
import MenuHeader from './MenuHeader';
import MenuBody from './MenuBody';

function RestaurantMenu() {
  const { restid } = useParams();
  const menu = useMenu(restid);

  return (
    <div className="menu">
      <MenuHeader {...menu} />
      <MenuBody {...menu} />
    </div>
  );
}

export default RestaurantMenu;
