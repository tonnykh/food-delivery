import { RESTAURANTS_API_URL } from "../constants";

const fetchRestaurants = async (setAllRestaurants, setCarousels, setFilteredRestaurants ,setIsLoading) => {
  const response = await fetch(RESTAURANTS_API_URL);
  const { data } = await response.json();
  const { cards: restaurantsData } = data?.cards[2]?.data?.data;
  const { cards: carouselsData } = data?.cards[0]?.data?.data;
  setAllRestaurants(restaurantsData);
  setFilteredRestaurants(restaurantsData);
  setCarousels(carouselsData);
  setIsLoading(false);
};

export default fetchRestaurants;