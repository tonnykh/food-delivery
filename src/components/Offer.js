import React from "react";
import {
  MdLocalOffer,
} from "react-icons/md";

const Offer = ({ aggregatedDiscountInfoV2 }) => {
  return (
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
  );
};

export default Offer;