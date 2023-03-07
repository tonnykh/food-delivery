import React, { useEffect, useRef, useState } from 'react';
import useClickOutside from '../utils/useClickOutside';
import LocationSuggestionsDropdown from './LocationSuggestionsDropdown';
import CurrentLocationButton from './CurrentLocationButton';

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
        className="w-[35vw] bg-white pl-[3%] pr-[3%] pt-[3%]"
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
        {!showSuggestions && <CurrentLocationButton setToggle={setToggle} />}
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
