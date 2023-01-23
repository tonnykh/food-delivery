import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, EMPTY_CART_IMG_CDN_URL } from "../constants";
import {
  MdCheckBoxOutlineBlank,
  MdOutlineFavoriteBorder,
  MdSearch,
  MdLocalOffer,
} from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import FoodItemCard from "./FoodItemCard";
import { useMenu } from "../utils";
import MenuHeader from "./MenuHeader";

const menu = () => {
  const { restid } = useParams();
  const menu = useMenu(restid);

  console.log(menu, "REST MENU");
  return (
    <div className="menu">
      {/* *** RESTAURANT MENU HEADER *** */}
      <MenuHeader {...menu} />

      {/*  MENU CONTAINER  */}
      <div className="menu-container">
        {/* *** MENU left *** */}
        {/* <div className="menu-left-filter">
          {menu?.items == undefined
            ? ""
            : [
                ...new Set(
                  Object.values(menu?.items).map((item) => item.category)
                ),
              ].map((item) => <div key={item}>{item}</div>)}
        </div> */}

        {/* *** MENU center *** */}
        {/* <div className="menu-list">
          {menu?.items == undefined
            ? ""
            : [
                ...new Set(
                  Object.values(menu?.items).map((item) => item.category)
                ),
              ].map((item) => (
                <div key={item}>
                  <h2>{item}</h2>
                  <div className="number-of-item">
                    {Object.values(menu?.items).filter(
                      (ite) => ite.category == item
                    ).length + " ITEMS"}
                  </div>
                  <div>
                    {Object.values(menu?.items)
                      .filter((ite) => ite.category == item)
                      .map((it) => (
                        <FoodItemCard
                          {...it}
                          isOpened={availability?.opened}
                          key={it.id}
                        ></FoodItemCard>
                      ))}
                  </div>
                </div>
              ))}
        </div> */}

        {/* MENU RIGHT sidebar cart*/}
        {/* <div className="menu-right-cart">
          <div>Cart Empty</div>
          <img
            src={EMPTY_CART_IMG_CDN_URL}
            height="212"
          ></img>
          <div>
            Good food is always cooking! Go ahead, order some yummy items from
            the menu.
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default menu;
