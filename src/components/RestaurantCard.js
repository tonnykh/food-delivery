import React from 'react';
import { IMG_CDN_URL } from '../constants';
import { IoIosStar } from 'react-icons/io';

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

  return (
    <div className="card max-w-[280px] p-4 hover:cursor-pointer hover:shadow-xl">
      <img src={IMG_CDN_URL + cloudinaryImageId} className="w-full" alt="" />
      <div className="store-name-with-cuisine py-2">
        <h2 className="text-base text-gray-dark">{name}</h2>
        <h3 className="mt-1 text-xs font-normal text-gray-light">
          {cuisines.join(', ')}
        </h3>
      </div>
      <div className="store-item-details flex  justify-between pb-2 text-xs leading-loose text-gray-light">
        <div className="star-rating">
          <h4
            className={
              'flex items-center gap-1 ' +
              (avgRating > 4
                ? 'green pr-2 pl-1 font-normal leading-loose text-green'
                : 'orange font-normal leading-loose text-orange')
            }
          >
            <span>
              <IoIosStar />
            </span>
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
    </div>
  );
}

export default RestaurantCard;
