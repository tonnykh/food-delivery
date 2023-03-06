import { useState, useEffect } from 'react';
import { FETCH_RESTAURANTS_URL, PAGE_TYPE } from '../constants';

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [carousels, setCarousels] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [mainCategories, setMainCategories] = useState([]);

  async function fetchRestaurant() {
    // const response = await fetch(
    //   'https://cors-anywhere.herokuapp.com/' + FETCH_RESTAURANTS_URL + PAGE_TYPE
    // );
     const response = await fetch(
       '/api//dapi/restaurants/list/v5?page_type=DESKTOP_WEB_LISTING&lat=28.5619207&lng=77.2112073'
     );
    const json = await response.json();
    console.log(json.data.cards, '-----DATA CALL 1st');
    // const restaurantData = data?.cards[2]?.data?.data?.cards;
    // const carouselsData = data?.cards[0]?.data?.data?.cards;
    // const mainCategories = data?.sorts;
    // setRestaurants(restaurantData);
    // setCarousels(carouselsData);
    // setIsLoading(false);
    // setMainCategories(mainCategories);
  }

  useEffect(() => {
    fetchRestaurant();
  }, []);

  console.log(mainCategories, 'SORTS DATA');
  return [restaurants, carousels, isLoading, mainCategories];
};

export default useRestaurants;