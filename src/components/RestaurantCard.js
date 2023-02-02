import React, { useContext } from 'react';
import { IoIosStar } from 'react-icons/io';
import { MdLocalOffer } from 'react-icons/md';
import { IMG_CDN_URL } from '../constants';

import UserContext from '../utils/UserContext';

function RestaurantCard({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  slaString,
  costForTwoString,
  aggregatedDiscountInfo,
}) {
  const offer = aggregatedDiscountInfo.shortDescriptionList[0].meta;

  const { user } = useContext(UserContext);

  return (
    <div className="card max-w-[280px] p-4 hover:cursor-pointer hover:shadow-xl">
      {/* <img className="skeleton" /> */}

      <img src={IMG_CDN_URL + cloudinaryImageId} className="w-full" alt="" />

      <div className="store-name-with-cuisine py-2">
        <h2 className="text-base text-gray-dark">{name}</h2>
        <h3 className="mt-1 text-xs font-normal text-gray-light">
          {cuisines.join(', ')}
        </h3>
      </div>

      <div className="store-item-details flex  justify-between pt-2 pb-4 text-xs leading-loose text-gray-light">
        <div className="star-rating">
          <h4
            className={
              avgRating > 4
                ? 'green text-green flex gap-1 pr-2 pl-1 font-normal leading-loose'
                : 'orange text-orange font-normal leading-loose'
            }
          >
            {avgRating}
          </h4>
        </div>
        <div>•</div>
        <h4 className="font-normal leading-loose">{slaString}</h4>
        <div>•</div>
        <h4 className="font-normal leading-loose">{costForTwoString}</h4>
      </div>

      <div className="store-offer border-t py-3 text-gray-lighter">
        <h4 className="items-center gap-1 text-sm font-normal leading-loose text-brown-light">
          {offer}
        </h4>
      </div>
      {user.name}
    </div>
  );
}

export default RestaurantCard;
