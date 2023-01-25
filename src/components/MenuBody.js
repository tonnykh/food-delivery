import React from 'react';
import MenuLeftFilter from './MenuLeftFilter';
import MenuCenterList from './MenuCenterList';
import MenuRightCart from './MenuRightCart';

function MenuBody({ menu, availability }) {
  if (menu === undefined) return null;
  const categories = [
    ...new Set(Object.values(menu?.items).map((item) => item.category)),
  ];

  return (
    <div className="menu-container">
      <MenuLeftFilter categories={categories} />
      <MenuCenterList
        categories={categories}
        menu={menu}
        availability={availability}
      />
      <MenuRightCart />
    </div>
  );
}

export default MenuBody;
