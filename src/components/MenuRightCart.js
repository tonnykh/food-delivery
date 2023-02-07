import React from 'react';
import { EMPTY_CART_IMG_CDN_URL } from '../constants';
import { useSelector } from 'react-redux';
import CartFoodItem from './CartFoodItem';
import { Link } from 'react-router-dom';

const MenuRightCart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const cartTotalQuantity = useSelector((store) =>
    store.cart.items.reduce(
      (acc, itemWithQuantity) => acc + itemWithQuantity.quantity,
      0
    )
  );

  const totalFoodCost = useSelector((store) => store.cart.totalCost);

  const foodItems = useSelector((store) => store.cart.items);

  return (
    <div className="menu-right-cart w-80 pl-3 pr-3 pt-16 text-gray-light">
      {cartItems.length === 0 ? (
        <>
          <div className="text-3xl font-bold">Cart Empty</div>
          <img
            src={EMPTY_CART_IMG_CDN_URL}
            height="212"
            className="mt-12 opacity-50"
          ></img>
          <div
            className="mt-4
          max-w-[228px] text-base"
          >
            Good food is always cooking! Go ahead, order some yummy items from
            the menu.
          </div>
        </>
      ) : (
        <>
          <div className="text-3xl font-bold text-gray-dark">Cart</div>
          <p className="pb-2 text-xs ">
            {cartTotalQuantity} {cartTotalQuantity > 1 ? 'ITEMS' : 'ITEM'}
          </p>
          <div className="relative -left-3 z-10 w-80 border-4 border-white shadow-[0px_2px_4px_-3px_#33333375]"></div>
          <div className="max-h-[calc(100vh-270px)] overflow-y-auto py-2">
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
          </div>
          <div>
            <div className="relative -left-3 z-10 w-80 border-4 border-white shadow-[0px_-2px_4px_-3px_#33333375]"></div>
            <div className="flex justify-between pt-2 text-base font-bold text-gray-dark">
              <span>Subtotal </span>
              <span>Rs {totalFoodCost}</span>
            </div>
            <div className="text-xs font-normal">Extra charges may apply</div>
            <Link to={'/cart'}>
              <button className="m-auto mt-7 block h-12 w-full cursor-pointer bg-green text-center text-base font-bold text-white ">
                CHECKOUT →
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default MenuRightCart;
