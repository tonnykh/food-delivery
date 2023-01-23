import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import {
  MdCheckBoxOutlineBlank,
  MdOutlineFavoriteBorder,
  MdSearch,
  MdLocalOffer,
} from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import FoodItemCard from "./FoodItemCard";
import { useMenu } from "../utils";

const menu = () => {
  const { restid } = useParams();
  const menu = useMenu(restid);

  return (
    <div className="menu">
      {/* *** RESTAURANT HEADER *** */}
      <div className="restaurant-header-container">
        <div className="restaurant-header">
          <div>
            <img src={IMG_CDN_URL + menu?.cloudinaryImageId} height="165"></img>
          </div>

          <div className="restaurant-info">
            <h1>{menu?.name}</h1>

            <div>
              <div className="restaurant-cuisines">
                {menu?.cuisines?.join(", ")}
              </div>

              <div className="restaurant-location">
                {menu?.locality + ", " + menu?.area}
              </div>

              <div className="restaurant-sub-info">
                <div className="restaurant-sub-info-item">
                  <div>
                    <IoIosStar />
                    {" " + menu?.avgRatingString}
                  </div>
                  <p>{menu?.totalRatingsString}</p>
                </div>

                <div className="restaurant-sub-info-item">
                  <div>{menu?.sla?.deliveryTime + " mins"}</div>
                  <p>Delivery Time</p>
                </div>

                <div className="restaurant-sub-info-item">
                  <div>
                    {menu &&
                      (menu?.costForTwoMsg).split(" ")[0]}
                  </div>
                  <p>Cost for two</p>
                </div>
              </div>
            </div>

            <div className="filter-dishes">
              <div>
                <label htmlFor="dishes-input">
                  <MdSearch />
                </label>
                <input
                  type="text"
                  id="dishes-input"
                  placeholder="Search for dishes.."
                ></input>
              </div>
              <div>
                <MdCheckBoxOutlineBlank />
                Veg Only
              </div>
              <div>
                <MdOutlineFavoriteBorder />
                Favourite
              </div>
            </div>
          </div>

          <div className="offer">
            <h3>OFFER</h3>
            <div className="offer-inner">
              <div>
                <div>
                  <MdLocalOffer />
                </div>

                {
                  menu?.aggregatedDiscountInfoV2?.descriptionList[0]
                    ?.meta
                }
              </div>
              <div>
                <div>
                  <MdLocalOffer />
                </div>

                {
                  menu?.aggregatedDiscountInfoV2?.descriptionList[1]
                    ?.meta
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  MENU CONTAINER  */}
      <div className="menu-container">
        {/* *** MENU left *** */}
        <div className="menu-left-filter">
          {menu?.menu?.items == undefined
            ? ""
            : [
                ...new Set(
                  Object.values(menu?.menu?.items).map(
                    (item) => item.category
                  )
                ),
              ].map((item) => <div key={item}>{item}</div>)}
        </div>

        {/* *** MENU center *** */}
        <div className="menu-list">
          {menu?.menu?.items == undefined
            ? ""
            : [
                ...new Set(
                  Object.values(menu?.menu?.items).map(
                    (item) => item.category
                  )
                ),
              ].map((item) => (
                <div key={item}>
                  <h2>{item}</h2>
                  <div className="number-of-item">
                    {Object.values(menu?.menu?.items).filter(
                      (ite) => ite.category == item
                    ).length + " ITEMS"}
                  </div>
                  <div>
                    {Object.values(menu?.menu?.items)
                      .filter((ite) => ite.category == item)
                      .map((it) => (
                        <FoodItemCard
                          {...it}
                          isOpened={menu?.availability?.opened}
                          key={it.id}
                        ></FoodItemCard>
                      ))}
                  </div>
                </div>
              ))}
        </div>

        {/* MENU RIGHT sidebar cart*/}
        <div className="menu-right-cart">
          <div>Cart Empty</div>
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
            height="212"
          ></img>
          <div>
            Good food is always cooking! Go ahead, order some yummy items from
            the menu.
          </div>
        </div>
      </div>
    </div>
  );
};
export default menu;
