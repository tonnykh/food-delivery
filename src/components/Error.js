import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      <h3>{status + " : " + statusText}</h3>
    </div>
  );
};

export default Error;



// <div className="flex flex-col items-center h-[calc(100vh-80px)] justify-center">
    //   <img
    //     className=" h-64 w-64"
    //     src={EMPTY_CART_IMG_COLOR_CDN_URL}
    //   ></img>
    //   <div className='mt-6 text-xl font-bold text-gray-dark'>Your cart is empty</div>
    //   <div className='mt-2 text-sm text-gray-light'>You can go to home page to view more restaurants</div>
    //   <button className='bg-gray-dark text-white mt-8 py-3 px-5 font-bold text-sm cursor-pointer'>SEE RESTAURANTS NEAR YOU</button>
    // </div>
