import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import TopImagesCarousel from "./TopImagesCarousel";
import { MdSearch, MdOutlineFilterAlt } from "react-icons/md";

function filterData(searchTxt, restaurantList) {
  const filterData = restaurantList.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  useEffect(() => {
    const data = getData();
    console.log(data);

  });

  async function getData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5620966&lng=77.2139292&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurantListAll = json.data.cards[2].data.data.cards;
    return restaurantListAll;
  }

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

      <TopImagesCarousel />

      <div className="filter-container">
        <div className="filter-category">
          <p>Relevance</p>
          <p>Delivery Time</p>
          <p>Rating</p>
          <p>Cost: Low to High</p>
          <p>Cost: High to Low</p>
          <div className="filter-sub-category">
            <p>Filters</p>
            <MdOutlineFilterAlt />
          </div>
        </div>
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
