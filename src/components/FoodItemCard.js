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
    <div className="restaurant-menu-item" key={id}>
      <div className="restaurant-menu-item-left">
        <div>
          <i className={isVeg ? 'icon-veg green' : 'icon-non-veg red'}></i>
          <span className="gold">
            <i className={isBestSeller ? 'icon-star' : null}></i>
            {isBestSeller ? 'Bestseller' : null}
          </span>
        </div>
        <h3>{name}</h3>
        {price == 0 ? <p>Rs {defaultPrice / 100}</p> : <p>Rs {price / 100}</p>}

        <div className="description">{description}</div>
      </div>
      <div className="restaurant-menu-item-right">
        {cloudinaryImageId && (
          <img
            src={MENU_IMG_CDN_URL + cloudinaryImageId}
            width="118"
            height="96"
          ></img>
        )}

        {productQuantity > 0 ? (
          <>
            <button onClick={() => cart.addOneToCart(id)}>+</button>
            <button onClick={() => cart.removeOneFromCart(id)}>-</button>
            <p style={{ color: 'red', fontSize: '2rem' }}>{productQuantity}</p>
            <button onClick={() => cart.deleteFromCart(id)}>Delete</button>
          </>
        ) : (
          <button
            className={
              (isOpened ? 'green' : null) +
              ' ' +
              (!cloudinaryImageId && 'no-image')
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
