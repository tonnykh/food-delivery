import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import TopImagesCarousel from "./TopImagesCarousel";
import Search from "./Search";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import { MdOutlineFilterAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { filterData } from "../utils";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [carousels, setCarousels] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5620966&lng=77.2139292&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING"
    );
    const { data } = await response.json();
    const { cards: restaurantsData } = data?.cards[2]?.data?.data;
    const { cards: carouselsData } = data?.cards[0]?.data?.data;
    setAllRestaurants(restaurantsData);
    setCarousels(carouselsData);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const data = filterData(searchTxt, allRestaurants);
    setFilteredRestaurants(data);
  };

  return (
    <main>
      <Search
        searchText={searchTxt}
        setSearchTxt={setSearchTxt}
        handleSearch={handleSearch}
      />

      {carousels ? (
        <TopImagesCarousel carousels={carousels} />
      ) : (
        <div className="shimmer-carousel-container">
          {[...Array(4).keys()].map((n) => {
            return <img className="shimmer shimmer-carousel" key={n}></img>;
          })}
        </div>
      )}

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
        {allRestaurants &&
          (filteredRestaurants.length > 0
            ? filteredRestaurants
            : allRestaurants
          ).map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })}
        {allRestaurants == false &&
          [...Array(8).keys()].map((n) => {
            return <ShimmerRestaurantCard key={n} />;
          })}
      </div>
    </main>
  );
};

export default Body;
