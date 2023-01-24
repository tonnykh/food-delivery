import React from "react";
import { IMG_CDN_URL } from "../constants";

const RestaurantImage = ({ cloudinaryImageId }) => {
  return (
    <div>
      <img src={IMG_CDN_URL + cloudinaryImageId} height="165"></img>
    </div>
  );
};

export default RestaurantImage;