import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FETCH_RESTAURANTS_URL, PAGE_TYPE } from '../constants';

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [carousels, setCarousels] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [mainCategories, setMainCategories] = useState([]);

  const latitude = useSelector((store) => store.location.coordinates.latitude);
  const longitude = useSelector(
    (store) => store.location.coordinates.longitude
  );

  console.log(latitude, longitude, 'DATA API RESTAURANT LAT LONG');

  async function fetchRestaurant() {
    if (latitude === undefined && longitude === undefined) return;

    const response = await fetch(
      FETCH_RESTAURANTS_URL +
        PAGE_TYPE +
        '&lat=' +
        latitude +
        '&lng=' +
        longitude
    );

    const { data } = await response.json();
    console.log(response, data, 'DATA API RESTAURANT');

    // console.log(json.data.cards, '-----DATA CALL 1st');
    const restaurantData = data?.cards[2]?.data?.data?.cards;
    const carouselsData = data?.cards[0]?.data?.data?.cards;
    const mainCategories = data?.sorts;
    setRestaurants(restaurantData);
    setCarousels(carouselsData);
    setIsLoading(false);
    setMainCategories(mainCategories);
  }
  

  useEffect(() => {
    fetchRestaurant();
  }, [latitude, longitude]);

  console.log(carousels, 'CarouSELS DATA');
  return [restaurants, carousels, isLoading, mainCategories];
};

export default useRestaurants;
