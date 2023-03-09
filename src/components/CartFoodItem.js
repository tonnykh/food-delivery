import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';

const CartFoodItem = ({ name, price, defaultPrice, count, foodItem }) => {
  console.log(defaultPrice, 'FOOD price');
  const dispatch = useDispatch();

  const addOne = (foodItem) => {
    dispatch(addItem(foodItem.item));
  };

  const removeOne = (foodItem) => {
    dispatch(removeItem(foodItem.item));
  };

  return (
    // <div className="my-0 mx-4 py-0 px-4">
    <div className="flex items-center py-2">
      <div className="mr-4 w-[129px] text-sm font-normal">{name}</div>
      <div className="flex w-20 flex-grow items-center justify-between">
        <div className="ml-4 flex border border-gray-lighter text-sm font-bold text-green">
          <button
            className="p-2 text-gray-light"
            onClick={() => removeOne(foodItem)}
          >
            -
          </button>
          <button className="p-2">{count}</button>
          <button className="p-2" onClick={() => addOne(foodItem)}>
            +
          </button>
        </div>
        <div className="text-xs text-gray-light">
          Rs {(price === 0 ? defaultPrice : price * count) / 100}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CartFoodItem;
