import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

function filterData(searchTxt, restaurantList) {
  const filterData = restaurantList.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <main>
      <div className="search-container">
        <form>
          <input
            type="text"
            className="search-input"
            placeholder="Search restaurant.."
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={(e) => {
              const data = filterData(searchTxt, restaurantList);
                setRestaurants(data);
                e.preventDefault();
            }}
          >
            <MdSearch />
          </button>
        </form>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </main>
  );
};

export default Body;
