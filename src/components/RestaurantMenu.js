import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { MENU_IMG_CDN_URL } from "../config";

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
              <div>
                <div>{restaurantMenu?.avgRatingString}</div>
                <p>{restaurantMenu?.totalRatingsString}</p>
              </div>
              <div>
                <div>{restaurantMenu?.sla?.deliveryTime + " mins"}</div>
                <p>Delivery Time</p>
              </div>
              <div>
                <div>
                  {restaurantMenu &&
                    (restaurantMenu?.costForTwoMsg).split(" ")[0]}
                </div>
                <p>Cost for two</p>
              </div>
            </div>
          </div>
        </div>

        <div className="offer">
          <div>OFFER</div>
          <div>
            <div>
              {
                restaurantMenu?.aggregatedDiscountInfoV2?.descriptionList[0]
                  ?.meta
              }
            </div>
            <div>
              {
                restaurantMenu?.aggregatedDiscountInfoV2?.descriptionList[1]
                  ?.meta
              }
            </div>
          </div>
        </div>
      </div>

      {/*  MENU CONTAINER  */}
      <div className="menu-container">
        {/* *** MENU left *** */}
        <div>
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
        <div>
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
                  <div>
                    {Object.values(restaurantMenu?.menu?.items)
                      .filter((ite) => ite.category == item)
                      .map((it) => (
                        <div key={it.id}>
                          <div>
                            <div>{it.name}</div>
                            <div>{"Rs " + it.price}</div>
                            <div>{it.description}</div>
                          </div>
                          <div>
                            <img
                              src={MENU_IMG_CDN_URL + it.cloudinaryImageId}
                              width="118"
                            ></img>
                            <button>
                              {restaurantMenu?.availability?.opened
                                ? "ADD"
                                : "Unavailable"}
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
        </div>

        {/* MENU RIGHT sidebar */}
        <div>
          <div>Cart Empty</div>
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"></img>
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
