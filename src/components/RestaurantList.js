import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ShimmerRestaurantCard from './ShimmerRestaurantCard';
import RestaurantCard from './RestaurantCard';
import { useRestaurantsChange, useRestaurants } from '../utils';
import { useSelector } from 'react-redux';

function filterRestaurant(text, data) {
  return data.filter((eachData) =>
    eachData?.data?.name?.toLowerCase().includes(text?.toLowerCase())
  );
}

function RestaurantList({ restaurants }) {
  // const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const search = useSelector((store) => store.search.searchInput);
  console.log(filterRestaurant(search, restaurants), 'SEARCH');

  const filter = filterRestaurant(search, restaurants);
  console.log(filter, 'FILTERED');

  // search.length > 0 &&
  //   setFilteredRestaurants(filterRestaurant(search, restaurants));

  // if (restaurants === undefined) return;

  return (
    <div className="restaurant-list my-0 mx-auto flex max-w-7xl flex-wrap gap-8 pt-8 pl-8">
      {/* {filteredRestaurants.length !== 0
        ? filteredRestaurants.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant?.data?.id}`}
              key={restaurant?.data?.id}
            >
              <RestaurantCard {...restaurant?.data} />
            </Link>
          ))
        : restaurants.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant?.data?.id}`}
              key={restaurant?.data?.id}
            >
              <RestaurantCard {...restaurant?.data} />
            </Link>
          ))} */}
      {filter.map((restaurant) => (
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
