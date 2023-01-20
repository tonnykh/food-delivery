import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { MENU_IMG_CDN_URL } from "../config";
import {
  MdCheckBoxOutlineBlank,
  MdOutlineFavoriteBorder,
  MdSearch,
  MdLocalOffer,
} from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import FoodItemCard from "./FoodItemCard";

const RestaurantMenu = () => {
  const { restid } = useParams();

  const [restaurantMenu, setRestaurant] = useState(null);

  console.log(restid);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.5620966&lng=77.2139292&menuId=" +
        restid
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json?.data);
  }

  return (
    <div className="menu">
      {/* *** RESTAURANT HEADER *** */}
      <div className="restaurant-header-container">
        <div className="restaurant-header">
          <div>
            <img
              src={IMG_CDN_URL + restaurantMenu?.cloudinaryImageId}
              height="165"
            ></img>
          </div>

          <div className="restaurant-info">
            <h1>{restaurantMenu?.name}</h1>

            <div>
              <div className="restaurant-cuisines">
                {restaurantMenu?.cuisines?.join(", ")}
              </div>

              <div className="restaurant-location">
                {restaurantMenu?.locality + ", " + restaurantMenu?.area}
              </div>

              <div className="restaurant-sub-info">
                <div className="restaurant-sub-info-item">
                  <div>
                    <IoIosStar />
                    {" " + restaurantMenu?.avgRatingString}
                  </div>
                  <p>{restaurantMenu?.totalRatingsString}</p>
                </div>

                <div className="restaurant-sub-info-item">
                  <div>{restaurantMenu?.sla?.deliveryTime + " mins"}</div>
                  <p>Delivery Time</p>
                </div>

                <div className="restaurant-sub-info-item">
                  <div>
                    {restaurantMenu &&
                      (restaurantMenu?.costForTwoMsg).split(" ")[0]}
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
                  restaurantMenu?.aggregatedDiscountInfoV2?.descriptionList[0]
                    ?.meta
                }
              </div>
              <div>
                <div>
                  <MdLocalOffer />
                </div>

                {
                  restaurantMenu?.aggregatedDiscountInfoV2?.descriptionList[1]
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
          {restaurantMenu?.menu?.items == undefined
            ? ""
            : [
                ...new Set(
                  Object.values(restaurantMenu?.menu?.items).map(
                    (item) => item.category
                  )
                ),
              ].map((item) => <div key={item}>{item}</div>)}
        </div>

        {/* *** MENU center *** */}
        <div className="menu-list">
          {restaurantMenu?.menu?.items == undefined
            ? ""
            : [
                ...new Set(
                  Object.values(restaurantMenu?.menu?.items).map(
                    (item) => item.category
                  )
                ),
              ].map((item) => (
                <div key={item}>
                  <h2>{item}</h2>
                  <div className="number-of-item">
                    {Object.values(restaurantMenu?.menu?.items).filter(
                      (ite) => ite.category == item
                    ).length + " ITEMS"}
                  </div>
                  <div>
                          {Object.values(restaurantMenu?.menu?.items)
                              .filter((ite) => ite.category == item)
                              .map((it) => (
                                  
                                  <FoodItemCard {...it} isOpened={restaurantMenu?.availability?.opened } key={it.id}></FoodItemCard>
                                  
                        // <div className="restaurant-menu-item" key={it.id}>
                        //   <div className="restaurant-menu-item-left">
                        //     <div>
                        //       <i
                        //         className={
                        //           it.isVeg
                        //             ? "icon-veg green"
                        //             : "icon-non-veg red"
                        //         }
                        //       ></i>
                        //       <span className="gold">
                        //         <i
                        //           className={
                        //             it.isBestSeller ? "icon-star" : null
                        //           }
                        //         ></i>
                        //         {it.isBestSeller ? "Bestseller" : null}
                        //       </span>
                        //     </div>
                        //     <h3>{it.name}</h3>
                        //     <p>
                        //       {"₨ " +
                        //         it.price
                        //           .toString()
                        //           .replace(/(?<=^[0-9]{3})/g, ".")}
                        //     </p>
                        //     <div className="description">{it.description}</div>
                        //   </div>
                        //   <div className="restaurant-menu-item-right">
                        //     {it.cloudinaryImageId && (
                        //       <img
                        //         src={MENU_IMG_CDN_URL + it.cloudinaryImageId}
                        //         width="118"
                        //         height="96"
                        //       ></img>
                        //     )}

                        //     <button
                        //       className={
                        //         restaurantMenu?.availability?.opened
                        //           ? "green"
                        //           : null + it.cloudinaryImageId && "no-image"
                        //       }
                        //     >
                        //       {restaurantMenu?.availability?.opened
                        //         ? "ADD"
                        //         : "Unavailable"}
                        //     </button>
                        //   </div>
                        // </div>
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
export default RestaurantMenu;
