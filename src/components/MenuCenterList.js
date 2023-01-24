import React from "react";
import FoodItemCard from "./FoodItemCard";

const filterItemByCategory = (menu, category) => {
  return Object.values(menu?.items).filter(
    (item) => item.category === category
  );
};

const MenuCenterList = ({ categories, menu, availability }) => {
  return (
    <div className="menu-list">
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="number-of-item">
            {filterItemByCategory(menu, category).length + " ITEMS"}
          </div>
          <div>
            {filterItemByCategory(menu, category).map((item) => (
              <FoodItemCard
                {...item}
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
