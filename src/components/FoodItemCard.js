import React, { useContext } from 'react';
import { MENU_IMG_CDN_URL } from '../constants';
import { CartContext } from '../CartContext';

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
}) => {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(id);

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
            // width="118"
            // height="96"
            className="h-[96px] w-[118px] rounded-sm"
          ></img>
        )}

        {productQuantity > 0 ? (
          <>
            <button
              onClick={() => cart.addOneToCart(id)}
              className="relative -top-6 h-9 w-24 border border-gray-light bg-white"
            >
              +
            </button>
            <button
              onClick={() => cart.removeOneFromCart(id)}
              className="relative -top-6 h-9 w-24 border border-gray-light bg-white"
            >
              -
            </button>
            <p
              className="leading-loose"
              style={{ color: 'red', fontSize: '2rem' }}
            >
              {productQuantity}
            </p>
            <button
              onClick={() => cart.deleteFromCart(id)}
              className="relative -top-6 h-9 w-24 border border-gray-light bg-white"
            >
              Delete
            </button>
          </>
        ) : (
          <button
            className={
              (isOpened
                ? 'text-green relative -top-6 h-9 w-24 border border-gray-light bg-white'
                : null) +
              ' ' +
              (!cloudinaryImageId && 'no-image top-8 right-2')
            }
            onClick={() => cart.addOneToCart(id)}
          >
            {isOpened ? 'ADD' : 'Unavailable'}
          </button>
        )}
      </div>
    </div>
  );
};

export default FoodItemCard;
