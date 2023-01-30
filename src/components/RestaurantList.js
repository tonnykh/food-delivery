import React from 'react';
import { Link } from 'react-router-dom';
import ShimmerRestaurantCard from './ShimmerRestaurantCard';
import RestaurantCard from './RestaurantCard';

function RestaurantList({ filteredRestaurants, restaurants, isLoading }) {

  // if (filteredRestaurants.length === 0) return [];
  console.log(filteredRestaurants, "FILTERED REST");

  console.log(restaurants, "REST");
  if (restaurants === undefined) return;


  return (
    <div className="restaurant-list flex gap-8 flex-wrap max-w-7xl my-0 mx-auto pt-8 pl-8">
      {isLoading
        ? [...Array(8).keys()].map((n) => <ShimmerRestaurantCard key={n} />)
        : (filteredRestaurants?.length === 0
            ? restaurants
            : filteredRestaurants
          ).map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant?.data?.id}`}
              key={restaurant?.data?.id}
            >
              <RestaurantCard {...restaurant?.data} />
            </Link>
          ))}
    </div>
  );
}

export default RestaurantList;
