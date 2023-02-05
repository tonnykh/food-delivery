import React from 'react';
import { EMPTY_CART_IMG_COLOR_CDN_URL } from '../constants';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-col items-center h-[calc(100vh-80px)] justify-center">
      <img
        className=" h-64 w-64"
        src={EMPTY_CART_IMG_COLOR_CDN_URL}
      ></img>
      <div className='mt-6 text-xl font-bold text-gray-dark'>Your cart is empty</div>
      <div className='mt-2 text-sm text-gray-light'>You can go to home page to view more restaurants</div>
      <button className='bg-gray-dark text-white mt-8 py-3 px-5 font-bold text-sm cursor-pointer'>SEE RESTAURANTS NEAR YOU</button>
    </div>
  );
};

export default Cart;
