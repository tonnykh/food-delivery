import React from 'react';
import { EMPTY_CART_IMG_COLOR_CDN_URL, IMG_LOGIN_URL } from '../constants';
import { useSelector } from 'react-redux';
import CartBillContainer from './CartBillContainer';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <main>
      {cartItems.length === 0 ? (
        <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-center">
          <img className=" h-64 w-64" src={EMPTY_CART_IMG_COLOR_CDN_URL}></img>
          <div className="mt-6 text-xl font-bold text-gray-dark">
            Your cart is empty
          </div>
          <div className="mt-2 text-sm text-gray-light">
            You can go to home page to view more restaurants
          </div>
          <Link to={'/'}>
            <button className="mt-8 cursor-pointer bg-gray-dark py-3 px-5 text-sm font-bold text-white">
              SEE RESTAURANTS NEAR YOU
            </button>
          </Link>
        </div>
      ) : (
        <div className="overflow-auto bg-gray-lighter">
          <div className="relative my-0 mx-auto mb-36 mt-8 flex max-w-[1200px]">
            <div className="relative mr-7 flex-1">
              <div className="relative ml-6 mb-5 bg-white px-10 pt-9 pb-10">
                <div className="text-lg font-bold text-gray-dark">Account</div>
                <div>
                  <div className="text-sm font-normal leading-tight text-gray-light">
                    To place your order now, log in to your existing account or
                    sign up.
                  </div>
                  <img
                    className="absolute right-10 top-9"
                    src={IMG_LOGIN_URL}
                  ></img>
                  <div className="mt-9 flex">
                    <button className="mr-5 flex cursor-pointer flex-col items-center border border-green px-9 pt-2 pb-2 leading-tight text-green">
                      <span className="text-[13px]">Have an account?</span>
                      <span className="text-sm font-bold">LOG IN</span>
                    </button>
                    <button className="flex cursor-pointer flex-col items-center border bg-green px-9 pt-2 pb-2 leading-tight text-white">
                      <span className="text-[13px]">New to Swiggy?</span>
                      <span className="text-sm font-bold">SIGN UP</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative ml-6 mb-5 bg-white px-10 pt-9 pb-10">
                <div className="text-lg font-bold text-gray-light">
                  Delivery address
                </div>
              </div>
              <div className="relative ml-6 mb-5 bg-white px-10 pt-9 pb-10">
                <div className="text-lg font-bold text-gray-light">Payment</div>
              </div>
            </div>

            <CartBillContainer />
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
