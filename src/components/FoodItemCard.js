import React from 'react';
import { MENU_IMG_CDN_URL } from '../constants';
import { useDispatch } from 'react-redux';
import { addItem, addRestaurant, removeItem } from '../utils/cartSlice';
import { useSelector } from 'react-redux';

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
  foodItem,
  restaurantDetails,
}) => {
  // console.log(restaurantDetails, 'CARD');
  const restaurant = {
    name: restaurantDetails.name,
    cloudinaryImageId: restaurantDetails.cloudinaryImageId,
    area: restaurantDetails.area,
  };

  const dispatch = useDispatch();
  const addOneWithRestaurant = (foodItem, restaurant) => {
    dispatch(addItem(foodItem));
    dispatch(addRestaurant(restaurant));
  };

  const addOne = (foodItem) => {
    dispatch(addItem(foodItem));
  };

  const removeOne = (foodItem) => {
    dispatch(removeItem(foodItem));
  };

  // const count = useSelector((store) => store.cart.items.length);
  // console.log(count, "COUNT");

  const foodItems = useSelector((store) => store.cart.items);
  const foodQuantity = foodItems.find(
    (itemWithQuantity) => itemWithQuantity.item.id === id
  )?.quantity;
  console.log(foodQuantity, 'FOOD QUANTITY', name, id);



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
      <div className="restaurant-menu-item-right relative flex flex-col items-center pl-6">
        {cloudinaryImageId && (
          <img
            src={MENU_IMG_CDN_URL + cloudinaryImageId}
            className=" w-[118px] rounded-sm"
          ></img>
        )}

        {foodQuantity === undefined ? (
          <button
            className={
              (isOpened
                ? 'relative -top-6 h-9 w-24 border border-gray-lighter bg-white text-green'
                : null) +
              ' ' +
              (!cloudinaryImageId && 'no-image top-8 right-2')
            }
            onClick={() => addOneWithRestaurant(foodItem, restaurant)}
          >
            {isOpened ? 'ADD' : 'Unavailable'}
          </button>
        ) : (
          <div
            className={
              'relative -top-6 flex w-24 justify-evenly border border-gray-lighter bg-white text-sm font-bold text-green' +
              ' ' +
              (!cloudinaryImageId && 'no-image top-8 right-2')
            }
          >
            <button
              className="p-2 text-gray-light"
              onClick={() => removeOne(foodItem)}
            >
              -
            </button>
            <button className="p-2">{foodQuantity}</button>
            <button className="p-2" onClick={() => addOne(foodItem)}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodItemCard;
