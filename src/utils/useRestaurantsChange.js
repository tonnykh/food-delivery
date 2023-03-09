import { useEffect, useState } from 'react';
import { FETCH_RESTAURANTS_URL, PAGE_TYPE } from '../constants';
import { useSelector } from 'react-redux';

const useRestaurantsChange = (key) => {
  console.log(key, 'SORT ID USE CHANGE________');

  const latitude = useSelector((store) => store.location.coordinates.latitude);
  const longitude = useSelector(
    (store) => store.location.coordinates.longitude
  );
  console.log(latitude, 'LAT ----0-');

  const [restaurantsData, setRestaurantsData] = useState([]);

  async function fetchRestaurantChange() {
    const response = await fetch(
      FETCH_RESTAURANTS_URL +
        PAGE_TYPE +
        '&lat=' +
        latitude +
        '&lng=' +
        longitude +
        '&sortBy=' +
        key
    );
    const { data } = await response.json();
    console.log(response, data, 'CHANGE DATA');
    const restaurantsData = data?.cards[0]?.data?.data?.cards;
    setRestaurantsData(restaurantsData);
  }


  useEffect(() => {
    fetchRestaurantChange();
        console.log('CHANGE DATA FETCH');

  }, [key, latitude, longitude]);

  return restaurantsData;
};

export default useRestaurantsChange;
