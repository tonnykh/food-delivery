import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ShimmerRestaurantCard from './ShimmerRestaurantCard';
import RestaurantCard from './RestaurantCard';
import { useRestaurantsChange, useRestaurants } from '../utils';

function RestaurantList() {
  const { sortid } = useParams();
  console.log(sortid, 'SORTID_+_+');
  const restaurants = useRestaurantsChange(sortid);

  // if (filteredRestaurants.length === 0) return [];
  // console.log(filteredRestaurants, "FILTERED REST");

  console.log(restaurants, 'REST LIST');
  if (restaurants === undefined) return;

  return (
    <div className="restaurant-list my-0 mx-auto flex max-w-7xl flex-wrap gap-8 pt-8 pl-8">
      {restaurants.map((restaurant) => (
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
