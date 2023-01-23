import React from "react";
import RestaurantCard from "./RestaurantCard";
import TopImagesCarousel from "./TopImagesCarousel";
import Search from "./Search";
import Filter from "./Filter";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import { Link } from "react-router-dom";
import { useRestaurants, useSearchFilter, useOnline } from "../utils";

const Body = () => {
  const [restaurants, carousels, isLoading] = useRestaurants();
  const [filteredRestaurants, handleSearch, searchText, setSearchText] =
    useSearchFilter();

  if (!restaurants) return null;

  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <main>
        <h1>🔴 Offline, check your internet connection !!!</h1>
      </main>
    );
  }

  return (
    <main>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
      />

      {isLoading ? (
        <div className="shimmer-carousel-container">
          {[...Array(4).keys()].map((n) => (
            <img className="shimmer shimmer-carousel" key={n} />
          ))}
        </div>
      ) : (
        <TopImagesCarousel carousels={carousels} />
      )}

      <Filter />

      <div className="restaurant-list">
        {/* write logic for NO restaurant found here */}
        {isLoading
          ? [...Array(8).keys()].map((n) => <ShimmerRestaurantCard key={n} />)
          : (filteredRestaurants.length === 0
              ? restaurants
              : filteredRestaurants
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
      </div>
    </main>
  );
};

export default Body;
