import React from "react";
import { IMG_CDN_URL } from "../constants";
import {
  MdCheckBoxOutlineBlank,
  MdOutlineFavoriteBorder,
  MdSearch,
  MdLocalOffer,
} from "react-icons/md";
import { IoIosStar } from "react-icons/io";

const MenuHeader = ({
  cloudinaryImageId,
  name,
  cuisines,
  locality,
  area,
  avgRatingString,
  totalRatingsString,
  sla,
  costForTwoMsg,
  aggregatedDiscountInfoV2,
  menu,
}) => {

  return (
    <div className="restaurant-header-container">
      <div className="restaurant-header">
        {/* left */}
        <div>
          <img src={IMG_CDN_URL + cloudinaryImageId} height="165"></img>
        </div>

        {/* center  */}
        <div className="restaurant-info">
          <h1>{name}</h1>

          <div>
            <div className="restaurant-cuisines">{cuisines?.join(", ")}</div>
            <div className="restaurant-location">{locality + ", " + area}</div>
            <div className="restaurant-sub-info">
              <div className="restaurant-sub-info-item">
                <div>
                  <IoIosStar />
                  {" " + avgRatingString}
                </div>
                <p>{totalRatingsString}</p>
              </div>
              <div className="restaurant-sub-info-item">
                <div>{sla?.deliveryTime + " mins"}</div>
                <p>Delivery Time</p>
              </div>
              <div className="restaurant-sub-info-item">
                <div>{menu && costForTwoMsg.split(" ")[0]}</div>
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
              ></input>
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

        {/* right */}
        <div className="offer">
          <h3>OFFER</h3>
          <div className="offer-inner">
            <div>
              <div>
                <MdLocalOffer />
              </div>
              {aggregatedDiscountInfoV2?.descriptionList[0]?.meta}
            </div>
            <div>
              <div>
                <MdLocalOffer />
              </div>
              {aggregatedDiscountInfoV2?.descriptionList[1]?.meta}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
