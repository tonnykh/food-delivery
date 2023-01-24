import React from "react";
import { EMPTY_CART_IMG_CDN_URL } from "../constants";

const MenuRightCart = () => {
  return (
    <div className="menu-right-cart">
      <div>Cart Empty</div>
      <img src={EMPTY_CART_IMG_CDN_URL} height="212"></img>
      <div>
        Good food is always cooking! Go ahead, order some yummy items from the
        menu.
      </div>
    </div>
  );
};

export default MenuRightCart;
