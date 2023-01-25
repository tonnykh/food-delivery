import { useState, useEffect } from 'react';
import { FETCH_RESTAURANTS_URL } from '../constants';

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [carousels, setCarousels] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  async function fetchRestaurant() {
    const response = await fetch(FETCH_RESTAURANTS_URL);
    const { data } = await response.json();
    const restaurantData = data?.cards[2]?.data?.data?.cards;
    const carouselsData = data?.cards[0]?.data?.data?.cards;
    setRestaurants(restaurantData);
    setCarousels(carouselsData);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchRestaurant();
  }, []);

  return [restaurants, carousels, isLoading];
};

export default useRestaurants;
