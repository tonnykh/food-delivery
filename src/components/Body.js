import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import TopImagesCarousel from "./TopImagesCarousel";
import { MdSearch, MdOutlineFilterAlt } from "react-icons/md";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import { Link } from "react-router-dom";

function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [carouselData, setCarouselData] = useState("");

  console.log(carouselData, "CAROUSEL BODY");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5620966&lng=77.2139292&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setCarouselData(json?.data?.cards[0]?.data?.data?.cards);
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
              const data = filterData(searchTxt, allRestaurants);
              setFilteredRestaurants(data);
              e.preventDefault();
            }}
          >
            <MdSearch />
          </button>
        </form>
      </div>

      {carouselData ? (
        <TopImagesCarousel carouselData={carouselData} />
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
