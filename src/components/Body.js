import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

import { TOP_CAROUSEL_IMG_CDN_URL } from "../config";
import { topCarouselImageList } from "../config";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdOutlineFilterAlt,
} from "react-icons/md";

function filterData(searchTxt, restaurantList) {
  const filterData = restaurantList.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
  return filterData;
}

let slidesToShow = 4;

function PrevArrow(props) {
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <MdArrowBackIos />
        </div>
      )}
    </>
  );
}

function NextArrow(props) {
  const { className, onClick, slideCount, currentSlide } = props;
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <MdArrowForwardIos />
        </div>
      )}
    </>
  );
}

const settings = {
  speed: 600,
  slidesToShow: slidesToShow,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <main>
      <div className="search-container">
        <form>
          <input
            type="text"
            className="search-input"
            placeholder="Search restaurant.."
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={(e) => {
              const data = filterData(searchTxt, restaurantList);
              setRestaurants(data);
              e.preventDefault();
            }}
          >
            <MdSearch />
          </button>
        </form>
      </div>

      <div className="top-carousel-images-container">
        <Slider {...settings}>
          {topCarouselImageList.map(({ data }) => {
            return (
              <div key={data.bannerId}>
                <img src={TOP_CAROUSEL_IMG_CDN_URL + data.creativeId} />
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="filter-container">
        <div className="filter-category">
          <p>Relevance</p>
          <p>Delivery Time</p>
          <p>Rating</p>
          <p>Cost: Low to High</p>
          <p>Cost: High to Low</p>
          <div className="filter-sub-category">
            <p>Filters</p>
            <MdOutlineFilterAlt />
          </div>
        </div>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </main>
  );
};

export default Body;
