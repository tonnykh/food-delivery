import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdOutlineFavoriteBorder,
  MdSearch,
} from 'react-icons/md';
import { IoIosStar } from 'react-icons/io';

function RestaurantInfo({
  name,
  cuisines,
  locality,
  area,
  avgRatingString,
  totalRatingsString,
  sla,
  costForTwoMsg,
  menu,
}) {
  return (
    <div className="restaurant-info">
      <h1>{name}</h1>

      <div>
        <div className="restaurant-cuisines">{cuisines?.join(', ')}</div>
        <div className="restaurant-location">{`${locality}, ${area}`}</div>
        <div className="restaurant-sub-info">
          <div className="restaurant-sub-info-item">
            <div>
              <IoIosStar />
              {` ${avgRatingString}`}
            </div>
            <p>{totalRatingsString}</p>
          </div>
          <div className="restaurant-sub-info-item">
            <div>{`${sla?.deliveryTime} mins`}</div>
            <p>Delivery Time</p>
          </div>
          <div className="restaurant-sub-info-item">
            <div>{menu && costForTwoMsg.split(' ')[0]}</div>
            <p>Cost for two</p>
          </div>
        </div>
      </div>

      <div className="filter-dishes">
        <div>
          <label htmlFor="dishes-input">
            <MdSearch />
          </label>
          <input
            type="text"
            id="dishes-input"
            placeholder="Search for dishes.."
          />
        </div>
        <div>
          <MdCheckBoxOutlineBlank />
          Veg Only
        </div>
        <div>
          <MdOutlineFavoriteBorder />
          Favourite
        </div>
      </div>
    </div>
  );
}

export default RestaurantInfo;
