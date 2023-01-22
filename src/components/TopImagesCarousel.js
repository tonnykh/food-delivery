import React from "react";
import { TOP_CAROUSEL_IMG_CDN_URL } from "../constants";
import { topCarouselImageList } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const slidesToShow = 4;

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

const TopImagesCarousel = (props) => {
  return (
    <div className="top-images-carousel-container">
      <Slider {...settings}>
        {props.carousels.map(({ data }) => {
          return (
            <div key={data.bannerId}>
              <img src={TOP_CAROUSEL_IMG_CDN_URL + data.creativeId} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopImagesCarousel;
