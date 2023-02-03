import { useEffect, useState } from 'react';
import { FETCH_RESTAURANTS_URL, PAGE_TYPE } from '../constants';
// import { FETCH_RESTAURANTS_HIGH_TO_LOW_COST_URL } from '../constants';

const useRestaurantsChange = (sortid) => {
  const [restaurantsData, setRestaurantsData] = useState([]);

  async function fetchRestaurantChange() {
    const response = await fetch(
      FETCH_RESTAURANTS_URL + 'sortBy=' + sortid + '&' + PAGE_TYPE
    );
    const { data } = await response.json();
    console.log(data, 'CHANGE DATA');
    const restaurantsData = data?.cards[0]?.data?.data?.cards;
    setRestaurantsData(restaurantsData);
  }

  async function fetchRestaurant() {
    const response = await fetch(FETCH_RESTAURANTS_URL + PAGE_TYPE);
    const { data } = await response.json();
    const restaurantData = data?.cards[2]?.data?.data?.cards;
    setRestaurantsData(restaurantData);
  }

  //  const restaurantData = data?.cards[2]?.data?.data?.cards;

  console.log(sortid === undefined, 'SORT ID USE CHANGE________');
  useEffect(() => {
    sortid === 'RELEVANCE' || sortid === undefined
      ? fetchRestaurant()
      : fetchRestaurantChange();
  }, [sortid]);

  return restaurantsData;
};

export default useRestaurantsChange;
