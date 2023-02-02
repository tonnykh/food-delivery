import { useEffect, useState } from 'react';
import { FETCH_RESTAURANTS_HIGH_TO_LOW_COST_URL } from '../constants';

const useRestaurantsHighToLow = () => {
  const [restaurants, setRestaurants] = useState([]);

  async function fetchRestaurantHighToLowCost() {
    const response = await fetch(FETCH_RESTAURANTS_HIGH_TO_LOW_COST_URL);
    const { data } = await response.json();
    const restaurantData = data?.cards[0]?.data?.data?.cards;
    setRestaurants(restaurantData);
  }

  useEffect(() => {
    fetchRestaurantHighToLowCost();
  }, []);
    
    return [restaurants];
};

export default useRestaurantsHighToLow;
