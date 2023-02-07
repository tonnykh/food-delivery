import React from 'react';
import { MdCenterFocusWeak } from 'react-icons/md';
import FoodItemCard from './FoodItemCard';

const filterItemByCategory = (menu, category) => {
  return Object.values(menu).filter((item) => item?.category === category);
};

const MenuCenterList = ({
  categories,
  menu,
  availability,
  restaurantDetails,
  isVegMenu,
}) => {
  console.log(restaurantDetails, 'REST CENTER');
  console.log(menu, 'MENU CENTER');
  console.log(Object.values(menu), 'MENU CENTER ARRAY');
  console.log(Object.values(menu)[0], 'MENU CENTER ARRAY 1');
  console.log(Object.values(menu)[0].isVeg, 'MENU CENTER ARRAY 1 is Veg');

  const vegMenu = Object.values(menu).filter((item) => item.isVeg);
  console.log(vegMenu, 'MENU VEGETARIAN LIST');


  return (
    <div className="menu-list w-[538px]">
      {categories.map((category) => (
        <div key={category} className="border-b-2 border-gray-dark">
          <h2 id={category} className="pt-20 text-xl font-bold">
            {category}
          </h2>
          <div className="number-of-item text-xs font-bold leading-loose text-gray-light">
            {filterItemByCategory(isVegMenu ? vegMenu : menu, category).length +
              ' ITEMS'}
          </div>
          <div className="">
            {filterItemByCategory(isVegMenu ? vegMenu : menu, category).map(
              (item) => (
                <FoodItemCard
                  {...item}
                  foodItem={item}
                  isOpened={availability?.opened}
                  key={item.id}
                  restaurantDetails={restaurantDetails}
                ></FoodItemCard>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCenterList;
