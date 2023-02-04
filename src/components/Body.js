import React from 'react';
import TopImagesCarousel from './TopImagesCarousel';
import Filter from './Filter';
import { useRestaurants, useOnline } from '../utils';
import IsOnline from './IsOnline';
import RestaurantList from './RestaurantList';

const Body = () => {
  const [restaurants, carousels, isLoading, sorts] = useRestaurants();

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
      <TopImagesCarousel carousels={carousels} isLoading={isLoading} />
      <Filter setRestaurants={() => changeRestaurant()} sorts={sorts} />
      <RestaurantList restaurants={restaurants} isLoading={isLoading} />
    </main>
  );
};

export default Body;
