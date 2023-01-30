import React from 'react';
import { IMG_CDN_URL } from '../constants';

function RestaurantImage({ cloudinaryImageId }) {
  return (
    <div>
      <img src={IMG_CDN_URL + cloudinaryImageId} height="165" alt="" className='h-44 w-64'/>
    </div>
  );
}

export default RestaurantImage;
