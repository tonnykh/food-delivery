import React from 'react';
import { MENU_IMG_CDN_URL } from '../constants';
import { useDispatch } from 'react-redux';
import { addItem, addRestaurant } from '../utils/cartSlice';

const FoodItemCard = ({
  id,
  isVeg,
  isBestSeller,
  name,
  cloudinaryImageId,
  price,
  defaultPrice,
  description,
  isOpened,
  item,
  area,
  restaurantDetails,
}) => {
  // console.log(restaurantDetails, 'CARD');
  const restaurant = {
    name: restaurantDetails.name,
    cloudinaryImageId: restaurantDetails.cloudinaryImageId,
    area: restaurantDetails.area,
  };

  const dispatch = useDispatch();
  const addFoodItem = (item, restaurant) => {
    dispatch(addItem(item));
    // addOneRestaurant(restaurant);
    dispatch(addRestaurant(restaurant));
  };

  // const restaurant = {
  //   name: name,
  //   cloudinaryImageId: cloudinaryImageId,
  //   area: area,
  // };

  // const addOneRestaurant = (restaurant) => {
  //   addRestaurant(restaurant);
  // };

  return (
    <div
      className="restaurant-menu-item flex justify-between border-b border-gray-lighter pt-12 pb-8"
      key={id}
    >
      <div className="restaurant-menu-item-left">
        <div className="flex gap-2 text-xs leading-loose">
          <i className={isVeg ? 'icon-veg green' : 'icon-non-veg red'}></i>
          <span className="gold flex gap-1">
            <i className={isBestSeller ? 'icon-star' : null}></i>
            {isBestSeller ? 'Bestseller' : null}
          </span>
        </div>
        <h3>{name}</h3>
        {price == 0 ? (
          <p className=" leading-loose">Rs {defaultPrice / 100}</p>
        ) : (
          <p>Rs {price / 100}</p>
        )}

        <div className="description pt-3 text-xs font-normal text-gray-light">
          {description}
        </div>
      </div>
      <div className="restaurant-menu-item-right flex flex-col items-center pl-6">
        {cloudinaryImageId && (
          <img
            src={MENU_IMG_CDN_URL + cloudinaryImageId}
            className=" w-[118px] rounded-sm"
          ></img>
        )}

        <button
          className={
            (isOpened
              ? 'relative -top-6 h-9 w-24 border border-gray-light bg-white text-green'
              : null) +
            ' ' +
            (!cloudinaryImageId && 'no-image top-8 right-2')
          }
          onClick={() => addFoodItem(item, restaurant)}
        >
          {isOpened ? 'ADD' : 'Unavailable'}
        </button>
      </div>
    </div>
  );
};

export default FoodItemCard;
