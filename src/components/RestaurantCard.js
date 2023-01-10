import { IMG_CDN_URL } from "../config";
import React from "react";
import { IoIosStar } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  slaString,
  costForTwoString,
  aggregatedDiscountInfo,
}) => {
  const offer = aggregatedDiscountInfo.shortDescriptionList[0].meta;

  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />

      <div className="store-name-with-cuisine">
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
      </div>

      <div className="store-item-details">
        <div className="star-rating">
          <h4>
            <IoIosStar />
            {avgRating}
          </h4>
        </div>
        <div>•</div>
        <h4>{slaString}</h4>
        <div>•</div>
        <h4>{costForTwoString}</h4>
      </div>

      <div className="store-offer">
        <h4>
          <MdLocalOffer />
          {offer}
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
