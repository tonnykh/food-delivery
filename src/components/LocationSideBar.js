import React, { useEffect, useRef, useState } from 'react';
import useClickOutside from '../utils/useClickOutside';
import { TfiLocationPin } from 'react-icons/tfi';
import {
  addLocationAddress,
  addLatitude,
  addLongitude,
} from '../utils/locationSlice';
import { useDispatch } from 'react-redux';

const InputLocation = ({ searchText, handleSearch }) => {
  return (
    <input
      type="text"
      className="w-full border bg-white  px-2 py-1"
      value={searchText}
      placeholder="Search Location.."
      onChange={(e) => {
        handleSearch(e);
      }}
    />
  );
};

const CurrentLocation = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      error = 'Geolocation is not supported by this browser.';
    }
  }

  function showPosition(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  return (
    <button className="my-4 w-full border p-2" onClick={getLocation}>
      Get current location
    </button>
  );
};

const LocationSuggestionsDropdown = ({ suggestions, setToggle }) => {
  const dispatch = useDispatch();

  const getLocation = async (address) => {
    const response = await fetch(
      `https://geocode.search.hereapi.com/v1/geocode?q=${address}&apiKey=VnFLVrd5TM-RRRo3Oguq9SP2QPGLYB-D3-r9C0bLCFQ`
    );
    const data = await response.json();
    console.log(data?.items, 'LATITUDE');
    dispatch(addLatitude(data?.items?.[0]?.position?.lat));
    dispatch(addLongitude(data?.items?.[0]?.position?.lng));

    // console.log(data?.items?.[0]);
    // setLocationGlobal({
    //   loaded: true,
    //   coordinates: {
    //     latitude: data?.items?.[0]?.position?.lat,
    //     longitude: data?.items?.[0]?.position?.lng,
    //   },
    // });
    // setLocation({
    //   latitude: data?.items?.[0]?.position?.lat,
    //   longitude: data?.items?.[0]?.position?.lng,
    // });
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

const LocationSideBar = ({ setToggle }) => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const locationSideBarRef = useRef(null);
  useClickOutside(locationSideBarRef, () => {
    setToggle();
  });

  useEffect(() => {
    searchText.length > 2 && getLocationSuggestions(searchText);
  }, [searchText]);

  async function getLocationSuggestions(text) {
    const response = await fetch(
      `https://autocomplete.search.hereapi.com/v1/autocomplete?q=${text}&apiKey=VnFLVrd5TM-RRRo3Oguq9SP2QPGLYB-D3-r9C0bLCFQ&in=countryCode%3AIND`
    );
    const data = await response.json();
    console.log(data.items[0], 'LOCATION');
    setSuggestions(data?.items);
  }

  useEffect(() => {
    searchText.length > 2
      ? setShowSuggestions(true)
      : setShowSuggestions(false);
  }, [searchText]);

  return (
    <div className="fixed top-0 left-0 right-0 z-10 ml-[-1px] mt-[-1px] flex h-screen max-h-[100vh] bg-gray-dark bg-opacity-60">
      <div
        className="w-[40vw] bg-white pl-[3%] pr-[3%] pt-[3%]"
        ref={locationSideBarRef}
      >
        <button className="pb-4" onClick={() => setToggle()}>
          x
        </button>
        <InputLocation
          handleSearch={(e) => {
            setSearchText(e.target.value);
          }}
          searchText={searchText}
        />
        {!showSuggestions && <CurrentLocation />}
        {showSuggestions && (
          <LocationSuggestionsDropdown
            suggestions={suggestions}
            setToggle={setToggle}
          />
        )}
      </div>
    </div>
  );
};

export default LocationSideBar;
