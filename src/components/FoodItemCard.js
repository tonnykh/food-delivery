import React from "react";
import { MENU_IMG_CDN_URL } from "../constants";

const FoodItemCard = ({
  id,
  isVeg,
  isBestSeller,
  name,
  cloudinaryImageId,
  price,
  description,
  isOpened,
}) => {
  return (
    <div className="restaurant-menu-item" key={id}>
      <div className="restaurant-menu-item-left">
        <div>
          <i className={isVeg ? "icon-veg green" : "icon-non-veg red"}></i>
          <span className="gold">
            <i className={isBestSeller ? "icon-star" : null}></i>
            {isBestSeller ? "Bestseller" : null}
          </span>
        </div>
        <h3>{name}</h3>
        <p>{"₨ " + price.toString().replace(/(?<=^[0-9]{3})/g, ".")}</p>
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

        <button
          className={
            (isOpened ? "green" : null) + " " + (!cloudinaryImageId && "no-image")
          }
        >
          {isOpened ? "ADD" : "Unavailable"}
        </button>
      </div>
    </div>
  );
};

export default FoodItemCard;
