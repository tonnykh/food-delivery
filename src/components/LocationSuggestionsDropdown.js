import React from 'react';
import { useDispatch } from 'react-redux';
import { TfiLocationPin } from 'react-icons/tfi';
import {
  addLocationAddress,
  addLatitude,
  addLongitude,
} from '../utils/locationSlice';

const LocationSuggestionsDropdown = ({ suggestions, setToggle }) => {
  const dispatch = useDispatch();
  const getLocation = async (address) => {
    const response = await fetch(
      `https://geocode.search.hereapi.com/v1/geocode?q=${address}&apiKey=VnFLVrd5TM-RRRo3Oguq9SP2QPGLYB-D3-r9C0bLCFQ`
    );
    const data = await response.json();
    dispatch(addLatitude(data?.items?.[0]?.position?.lat));
    dispatch(addLongitude(data?.items?.[0]?.position?.lng));
  };

  return (
    <>
      {suggestions.map((suggestion) => {
        return (
          <div
            className="flex w-full cursor-pointer items-center border-b-2 border-dotted border-gray-lighter  py-5"
            key={suggestion?.id}
            onClick={() => {
              dispatch(addLocationAddress(suggestion?.address?.label));
              setToggle();
              getLocation(suggestion?.title);
            }}
          >
            {suggestion && (
              <TfiLocationPin className="min-w-[50px] text-orange " />
            )}
            <div className="">
              <span className="block text-sm font-bold duration-100 hover:cursor-pointer hover:text-orange ">
                {suggestion?.address?.label.split(',', 1)}
              </span>
              <span className="text-xs">
                {suggestion?.address?.label.substring(
                  suggestion?.address?.label.indexOf(',') + 1
                )}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LocationSuggestionsDropdown;
