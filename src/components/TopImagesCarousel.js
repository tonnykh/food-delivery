/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { TOP_CAROUSEL_IMG_CDN_URL } from '../constants';

function TopImagesCarousel({ isLoading, carousels }) {
  console.log(carousels, "CAROUSELS");

  return isLoading ? (
    <div className="shimmer-carousel-container flex h-80 content-center items-center gap-12 bg-gray-dark">
      {/* {[...Array(4).keys()].map((n) => (
        <img
          className="shimmer shimmer-carousel h-64 w-64 animate-pulse"
          key={n}
          alt=""
        />
      ))} */}
    </div>
  ) : (
    <div className="top-images-carousel-container flex h-80 px-16 justify-evenly items-center bg-gray-dark">

      {carousels.map(({ data }) => (
        <div key={data.bannerId}>
          <img
            className="w-64 h-64 cursor-pointer transition duration-700 ease-out hover:scale-105 hover:overflow-visible"
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