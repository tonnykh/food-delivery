/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { TOP_CAROUSEL_IMG_CDN_URL } from '../constants';

const slidesToShow = 4;

function PrevArrow(props) {
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick} aria-hidden="true">
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
        <div className={className} onClick={onClick} aria-hidden="true">
          <MdArrowForwardIos />
        </div>
      )}
    </>
  );
}

const settings = {
  speed: 600,
  slidesToShow,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

function TopImagesCarousel({ isLoading, carousels }) {
  return isLoading ? (
    <div className="shimmer-carousel-container">
      {[...Array(4).keys()].map((n) => (
        <img className="shimmer shimmer-carousel" key={n} alt="" />
      ))}
    </div>
  ) : (
    <div className="top-images-carousel-container">
      <Slider {...settings}>
        {carousels.map(({ data }) => (
          <div key={data.bannerId}>
            <img src={TOP_CAROUSEL_IMG_CDN_URL + data.creativeId} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TopImagesCarousel;
