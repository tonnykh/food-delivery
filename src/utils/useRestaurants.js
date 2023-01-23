import { useState, useEffect } from "react";
import { RESTAURANTS_API_URL } from "../constants";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [carousels, setCarousels] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  async function fetchRestaurant() {
    const response = await fetch(RESTAURANTS_API_URL);
    const { data } = await response.json();
    const { cards: restaurantsData } = data?.cards[2]?.data?.data;
    const { cards: carouselsData } = data?.cards[0]?.data?.data;
    setRestaurants(restaurantsData);
    setCarousels(carouselsData);
    setIsLoading(false);
  }

  return [restaurants, carousels, isLoading];
};

export default useRestaurants;
