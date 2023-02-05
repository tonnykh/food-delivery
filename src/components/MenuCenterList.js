import React from 'react';
import FoodItemCard from './FoodItemCard';

const filterItemByCategory = (menu, category) => {
  return Object.values(menu).filter((item) => item?.category === category);
};

const MenuCenterList = ({ categories, menu, availability }) => {
  return (
    <div className="menu-list w-[538px]">
      {categories.map((category) => (
        <div key={category} className="border-b-2 border-gray-dark">
          <h2 id={category} className="pt-16 text-xl">
            {category}
          </h2>
          <div className="number-of-item text-xs font-bold leading-loose text-gray-light">
            {filterItemByCategory(menu, category).length + ' ITEMS'}
          </div>
          <div className="">
            {filterItemByCategory(menu, category).map((item) => (
              <FoodItemCard
                {...item}
                item={item}
                isOpened={availability?.opened}
                key={item.id}
              ></FoodItemCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCenterList;
