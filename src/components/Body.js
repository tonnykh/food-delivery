import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";

const Body = () => {
  return (
    <main className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </main>
  );
};

export default Body;