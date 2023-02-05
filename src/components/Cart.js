import React from 'react';
import { EMPTY_CART_IMG_COLOR_CDN_URL, IMG_LOGIN_URL } from '../constants';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="overflow-auto bg-gray-lighter">
      <div className="relative my-0 mx-auto mb-36 mt-8 flex max-w-[1200px]">
        <div className="relative mr-7 flex-1">
          <div className="relative ml-6 mb-5 bg-white px-10 pt-9 pb-10">
            <div className="text-lg font-bold text-gray-dark">Account</div>
            <div>
              <div className="text-sm font-normal leading-tight text-gray-light">
                To place your order now, log in to your existing account or sign
                up.
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
        <div className="w-[366px]">
          <div className="flex flex-col bg-white">
            <button className="flex min-h-[90px] cursor-pointer py-5 px-7">
              <span className="h-12 w-12">
                <img
                  className="h-12"
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/j3lztxwyagtbwgbpbzxp"
                  alt=""
                />
              </span>
              <span className="ml-3 flex min-h-[50px] flex-1 flex-col items-start border-b-2 border-gray-dark">
                <div className="text-base font-bold text-gray-dark">
                  McDonald's
                </div>
                <div className="text-xs text-gray-light ">
                  South Extension 2
                </div>
              </span>
            </button>
            <div className="flex max-h-[calc(100vh-270px)]">
              <div className="-px-7 w-[366px] py-0">
                <div className="my-0 mx-4 py-0 px-4">
                  <div className="flex items-center py-2">
                    <div className="flex-grow">
                      <div className="mr-4 text-sm font-normal">
                        Piri Piri Seasoning
                      </div>
                    </div>
                    <div className="flex w-28 flex-grow items-center justify-between">
                      <div className="flex border border-gray-lighter text-sm font-bold text-green">
                        <button className="p-2 text-gray-light">-</button>
                        <button className="p-2">1</button>
                        <button className="p-2">+</button>
                      </div>
                      <div className="text-xs text-gray-light">Rs 22</div>
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-4 mt-4  py-0 px-4 pb-5">
                  <div className="mb-2 text-sm font-bold text-gray-dark">
                    Bill Details
                  </div>
                  <div className="my-3 flex justify-between text-xs text-gray-light">
                    <span>Item Total</span>
                    <span>Rs 423</span>
                  </div>
                  <div className="my-3 flex justify-between text-xs text-gray-light">
                    <div>Delivery Fee | 1.5 kms</div>
                    <div className="flex gap-2">
                      <span className="text-gray-light line-through">
                        Rs 39.00
                      </span>
                      <span className="text-green">FREE</span>
                    </div>
                  </div>
                  <div className="my-4 border-b border-gray-lighter"></div>
                  <div className="mb-5 flex justify-between text-xs text-gray-light">
                    <span>Govt Taxes & Other Charges</span>
                    <span>Rs 60.45</span>
                  </div>
                  <div className="border-b-2 border-gray-dark"></div>
                </div>
              </div>
            </div>

            <div className="flex h-14 justify-between px-8 text-sm font-bold">
              <div>TO PAY</div>
              <div>Rs 431</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
