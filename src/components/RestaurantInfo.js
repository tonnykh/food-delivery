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
  isVegMenu,
  handleVegMenu,
}) {

  // const onClick = () => {
    console.log(isVegMenu, 'VEG IS MENU_+_+_+');
  // }


  return (
    <div className="restaurant-info w-[538px]">
      <h1 className="text-3xl font-normal text-white">{name}</h1>

      <div>
        <div className="restaurant-cuisines mt-3 text-sm text-gray-light">
          {cuisines?.join(', ')}
        </div>
        <div className="restaurant-location mt-4 text-sm text-gray-light">{`${locality}, ${area}`}</div>
        <div className="restaurant-sub-info mt-6 flex text-base font-bold">
          <div className="restaurant-sub-info-item pr-8">
            <div>{` ${avgRatingString}`}</div>
            <p className="text-xs font-normal text-gray-light">
              {totalRatingsString}
            </p>
          </div>
          <div className="restaurant-sub-info-item border-r border-l border-gray-light px-8 pr-8">
            <div>{`${sla?.deliveryTime} mins`}</div>
            <p className="text-xs font-normal text-gray-light">Delivery Time</p>
          </div>
          <div className="restaurant-sub-info-item pl-8">
            <div>{menu && costForTwoMsg.split(' ')[0]}</div>
            <p className="text-xs font-normal text-gray-light">Cost for two</p>
          </div>
        </div>
      </div>

      <div className="filter-dishes absolute top-80 flex content-center gap-6">
        <div className="flex h-10 w-64 gap-2 bg-white px-4 text-xs font-bold text-gray-dark shadow-sm">
          <label htmlFor="dishes-input" className="flex items-center"></label>
          <input
            type="text"
            id="dishes-input"
            placeholder="Search for dishes.."
          />
        </div>
        <button className="flex h-10  gap-2 bg-white px-4 text-sm font-bold text-gray-dark shadow-sm items-center hover:text-green" onClick={handleVegMenu} >
          <MdCheckBoxOutlineBlank className={isVegMenu ? 'bg-green text-green' : ''} />
          Veg Only
        </button>
        <div className="flex h-10 gap-2 bg-white px-4 text-sm font-bold text-gray-dark shadow-sm items-center">
          <MdOutlineFavoriteBorder />
          Favourite
        </div>
      </div>
    </div>
  );
}

export default RestaurantInfo;
