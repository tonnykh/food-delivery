import React from 'react';
import CartFoodItem from './CartFoodItem';
import { useSelector } from 'react-redux';
import { MENU_IMG_CDN_URL } from '../constants';

const CartTotalAmount = () => {
  const totalFoodCost = useSelector((store) => store.cart.totalCost);

  return (
    <div className="flex h-14 justify-between px-8 pt-4 text-sm font-bold shadow-[0px_-1px_4px_-3px_#33333375]">
      <div>TO PAY</div>
      <div>Rs {(totalFoodCost / 100) + 60}</div>
    </div>
  );
};

const CartBillDetails = () => {
  const totalFoodCost = useSelector((store) => store.cart.totalCost);

  return (
    <div className="mt-4 border-b-2 border-gray-dark">
      <div className="mb-2 text-sm font-bold text-gray-dark">Bill Details</div>
      <div className="my-3 flex justify-between text-xs text-gray-light">
        <span>Item Total</span>
        <span>Rs {totalFoodCost / 100}</span>
      </div>
      <div className="my-3 flex justify-between text-xs text-gray-light">
        <div>Delivery Fee | 1.5 kms</div>
        <div className="flex gap-2">
          <span className="text-gray-light line-through">Rs 39.00</span>
          <span className="text-green">FREE</span>
        </div>
      </div>
      <div className="my-4 border-b border-gray-lighter"></div>
      <div className="mb-5 flex justify-between text-xs text-gray-light">
        <span>Govt Taxes & Other Charges</span>
        <span>Rs 60</span>
      </div>
      {/* <div className="border-b-2 border-gray-dark"></div> */}
    </div>
  );
};

const CartFoodItemsAndBillDetails = () => {
  const foodItems = useSelector((store) => store.cart.items);
  console.log(foodItems, 'BILL_=_=-+-');

  return (
    <div className="flex max-h-[calc(100vh-270px)]">
      <div className="-px-7 mx-7 w-[366px] overflow-auto">
        {foodItems.map((foodItem) => {
          return (
            <CartFoodItem
              {...foodItem.item}
              key={foodItem.item.id}
              count={foodItem.quantity}
              foodItem={foodItem}
            />
          );
        })}
        <CartBillDetails />
      </div>
    </div>
  );
};

const CartRestaurantDetails = () => {
  const restaurant = useSelector((store) => store.cart.restaurant);
  console.log(restaurant, 'CART BILL');
  return (
    <button className="flex min-h-[90px] cursor-pointer py-5 px-7 shadow-sm">
      <span className="h-12 w-12">
        <img
          className="h-12"
          src={MENU_IMG_CDN_URL + restaurant[0].cloudinaryImageId}
          alt=""
        />
      </span>
      <span className="ml-3 flex min-h-[50px] flex-1 flex-col items-start ">
        <div className="text-base font-bold text-gray-dark">
          {restaurant[0].name}
        </div>
        <div className="text-xs text-gray-light ">{restaurant[0].area}</div>
      </span>
    </button>
  );
};

const CartBillContainer = () => {
  return (
    <div className="w-[366px]">
      <div className="flex flex-col bg-white">
        <CartRestaurantDetails />
        <CartFoodItemsAndBillDetails />
        <CartTotalAmount />
      </div>
    </div>
  );
};

export default CartBillContainer;
