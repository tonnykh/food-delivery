import { useState } from "react";
import useRestaurants from "./useRestaurants";

const useSearchFilter = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [restaurants] = useRestaurants();

  const filterData = (searchTxt, restaurants) => {
    return restaurants.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const data = filterData(searchText, restaurants);
    return setFilteredRestaurants(data);
  };

  return [filteredRestaurants, handleSearch, searchText, setSearchText];
};

export default useSearchFilter;
