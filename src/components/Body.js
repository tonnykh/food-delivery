import React, { useEffect, useState } from 'react';
import TopImagesCarousel from './TopImagesCarousel';
import Search from './Search';
import Filter from './Filter';
import {
  useRestaurants,
  useSearchFilter,
  useOnline,
  useRestaurantsHighToLow,
} from '../utils';
import RestaurantList from './RestaurantList';
import IsOnline from './IsOnline';
// import useRestaurantsHighToLow from '../utils/useRestaurantsHighToLowCost';
import { FETCH_RESTAURANTS_HIGH_TO_LOW_COST_URL } from '../constants';

function Body() {
  const [restaurants, carousels, isLoading] = useRestaurants();
  const [filteredRestaurants, handleSearch, searchText, setSearchText] =
    useSearchFilter();
  // if (!restaurants) return null;

  console.log(restaurants, 'REST');

  const [restaurantAll, setRestaurantAll] = useState([]);
  useEffect(() => {
    setRestaurantAll(restaurants);
  }, [restaurants]);
  console.log(restaurantAll, 'ALL---');


  const [highToLowPrice] = useRestaurantsHighToLow();
  console.log(highToLowPrice, 'H2L DATA');


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
      <Filter setRestaurants={() => setRestaurantAll(highToLowPrice)} />
      <RestaurantList
        filteredRestaurants={filteredRestaurants}
        restaurants={restaurantAll}
        isLoading={isLoading}
      />
    </main>
  );
}

export default Body;
