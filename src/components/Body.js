import React from 'react';
import TopImagesCarousel from './TopImagesCarousel';
import Search from './Search';
import Filter from './Filter';
import { useRestaurants, useSearchFilter, useOnline } from '../utils';
import RestaurantList from './RestaurantList';
import IsOnline from './IsOnline';

function Body() {
  const [restaurants, carousels, isLoading] = useRestaurants();
  const [filteredRestaurants, handleSearch, searchText, setSearchText] = useSearchFilter();
  if (!restaurants) return null;

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
      <Filter />
      <RestaurantList
        filteredRestaurants={filteredRestaurants}
        restaurants={restaurants}
        isLoading={isLoading}
      />
    </main>
  );
}

export default Body;
