import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ShimmerRestaurantCard from './ShimmerRestaurantCard';
import RestaurantCard from './RestaurantCard';
import { useRestaurantsChange } from '../utils';
import { useSelector } from 'react-redux';

function filterRestaurant(text, data) {
  if (data === undefined) return;
  return data.filter((eachData) =>
    eachData?.data?.name?.toLowerCase().includes(text?.toLowerCase())
  );
}

function RestaurantList({ restaurants }) {
  const { sortid } = useParams();
  console.log(sortid, 'SORTID_+_+');

  const restaurantsParam = useRestaurantsChange(sortid);
  console.log(restaurantsParam, 'PARAM');

  const search = useSelector((store) => store.search.searchInput);
  console.log(filterRestaurant(search, restaurants), 'SEARCH');

  const filter = filterRestaurant(
    search,
    sortid === undefined || sortid === 'RELEVANCE'
      ? restaurants
      : restaurantsParam
  );
  console.log(filter, 'FILTERED');

  return (
    <div className="restaurant-list my-0 mx-auto flex max-w-7xl flex-wrap gap-8 pt-8 pl-8">
      {filter && filter.map((restaurant) => (
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
