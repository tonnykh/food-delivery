import { useState } from "react";
import useRestaurants from "./useRestaurants";
import useRestaurantsChange from "./useRestaurantsChange";
import { useParams } from "react-router-dom";

const useSearchFilter = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [restaurants] = useRestaurants();

  const { sortid } = useParams();
  const restaurantsChange = useRestaurantsChange(sortid);

  // const filterData = (searchTxt, restaurants) => {
  //   return restaurants.filter((restaurant) =>
  //     restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
  //   );
  // };

   const filterData = (searchTxt, restaurantsChange) => {
     return restaurantsChange.filter((restaurant) =>
       restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
     );
   };

  const handleSearch = (e) => {
    e.preventDefault();
    const data = filterData(searchText, restaurantsChange);
    return setFilteredRestaurants(data);
  };

  console.log(searchText, "SEARCH TEXT USE");

  return [filteredRestaurants, handleSearch, searchText, setSearchText];
};

export default useSearchFilter;
