import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";

const RestaurantMenu = () => {
  const { restid } = useParams();

    const [restaurant, setRestaurant] = useState([]);

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
      <div>
        <h1>Restaurant id: {restid} </h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
        <h3>{restaurant?.areaSlug}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} : stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restaurant?.menu?.items == undefined
            ? ""
            : Object.values(restaurant?.menu?.items).map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
