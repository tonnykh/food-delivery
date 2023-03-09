/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { TOP_CAROUSEL_IMG_CDN_URL } from '../constants';

function TopImagesCarousel({ isLoading, carousels }) {
  console.log(carousels, "CAROUSELS");

  //  if (
  //    carousels === undefined &&
  //    isLoading === undefined 
  //  )
  //    return null;

  return carousels === undefined ? (
    <div className="flex h-80 items-center justify-evenly px-16 bg-gray-dark">
      {[...Array(4).keys()].map((n) => (
        <img className="h-64 w-64 animate-pulse bg-gray-lighter" key={n} alt="" />
      ))}
    </div>
  ) : (
    <div className="flex h-80 items-center justify-evenly bg-gray-dark px-16">
      {carousels &&
        carousels.slice(0, 4).map(({ data }) => (
          <div key={data.bannerId}>
            <img
              className="h-64 w-64 cursor-pointer transition duration-700 ease-out hover:scale-105 hover:overflow-visible"
              src={TOP_CAROUSEL_IMG_CDN_URL + data.creativeId}
              alt=""
            />
          </div>
        ))}
    </div>
  );
}

export default TopImagesCarousel;


    // /* width: 1200px; */
    // height: 340px;
    // /* margin: 0 auto; */
    // padding: 0 120px;
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    // background-color: black;