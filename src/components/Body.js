import React, { useEffect, useState } from 'react';
import TopImagesCarousel from './TopImagesCarousel';
import Search from './Search';
import Filter from './Filter';
import {
  useRestaurants,
  useSearchFilter,
  useOnline,
} from '../utils';
import RestaurantList from './RestaurantList';
import IsOnline from './IsOnline';
// import useRestaurantsHighToLow from '../utils/useRestaurantsHighToLowCost';
// import { FETCH_RESTAURANTS_HIGH_TO_LOW_COST_URL } from '../constants';
import { Outlet } from 'react-router-dom';

const Body = () => {
  const [restaurants, carousels, isLoading, sorts] = useRestaurants();
  const [filteredRestaurants, handleSearch, searchText, setSearchText] =
    useSearchFilter();
  // if (!restaurants) return null;

  console.log(restaurants, 'REST');

  const [restaurantAll, setRestaurantAll] = useState([]);
  useEffect(() => {
    setRestaurantAll(restaurants);
  }, [restaurants]);
  console.log(restaurantAll, 'ALL---');

  const changeRestaurant = () => {
    setRestaurantAll(useRestaurantsHighToLow());
  };

  // const changeRestaurant = () => {
  //   setRestaurantAll((prevState) => useRestaurantsHighToLow(prevState));
  // };


  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <main>
        <IsOnline />
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
      <TopImagesCarousel carousels={carousels} isLoading={isLoading} />
      <Filter setRestaurants={() => changeRestaurant()} sorts={sorts} />
      <Outlet />
      {/* <RestaurantList
        filteredRestaurants={filteredRestaurants}
        restaurants={restaurantAll}
        isLoading={isLoading}
      /> */}
    </main>
  );
};

export default Body;
