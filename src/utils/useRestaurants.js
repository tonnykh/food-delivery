import { useState, useEffect } from 'react';
import { FETCH_RESTAURANTS_URL, PAGE_TYPE } from '../constants';

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [carousels, setCarousels] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [sorts, setSorts] = useState([]);

  async function fetchRestaurant() {
    const response = await fetch(FETCH_RESTAURANTS_URL + PAGE_TYPE);
    const { data } = await response.json();
    console.log(data?.sorts, "DATA CALL 1st");
    const restaurantData = data?.cards[2]?.data?.data?.cards;
    const carouselsData = data?.cards[0]?.data?.data?.cards;
    const sorts = data?.sorts;
    setRestaurants(restaurantData);
    setCarousels(carouselsData);
    setIsLoading(false);
    setSorts(sorts);
  }

  useEffect(() => {
    fetchRestaurant();
  }, []);


  console.log(sorts, "SORTS DATA");
  return [restaurants, carousels, isLoading, sorts];
};

export default useRestaurants;
