import React from 'react';
import { MdLocalOffer } from 'react-icons/md';

function RestaurantOffer({ aggregatedDiscountInfoV2 }) {
  return (
    <div className="offer relative w-72 border border-gray-lighter">
      <h3 className="absolute -top-3 -left-2 bg-gray-dark pr-2 pb-2 text-xl ">
        OFFER
      </h3>
      <div className="offer-inner pt-8 pr-10 pb-6 pl-6 text-sm">
        <div className="mb-4 flex gap-2">
          <div className="flex gap-2">
            <MdLocalOffer />
          </div>
          {aggregatedDiscountInfoV2?.descriptionList[0]?.meta}
        </div>
        <div className="flex gap-2">
          <div className="flex gap-2">
            <MdLocalOffer />
          </div>
          {aggregatedDiscountInfoV2?.descriptionList[1]?.meta}
        </div>
      </div>
    </div>
  );
}

export default RestaurantOffer;
