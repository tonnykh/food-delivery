import React from 'react';
import { Link } from 'react-router-dom';
import ShimmerRestaurantCard from './ShimmerRestaurantCard';
import RestaurantCard from './RestaurantCard';

function RestaurantList({ filteredRestaurants, restaurants, isLoading }) {
  return (
    <div className="restaurant-list">
      {isLoading
        ? [...Array(8).keys()].map((n) => <ShimmerRestaurantCard key={n} />)
        : (filteredRestaurants.length === 0
            ? restaurants
            : filteredRestaurants
          ).map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.data.id}`}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          ))}
    </div>
  );
}

export default RestaurantList;
