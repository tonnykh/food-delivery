import React from 'react';
import { IMG_CDN_URL } from '../constants';

function RestaurantImage({ cloudinaryImageId }) {
  return (
    <div>
      <img src={IMG_CDN_URL + cloudinaryImageId} height="165" alt="" />
    </div>
  );
}

export default RestaurantImage;
