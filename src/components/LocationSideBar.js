import React, { useRef } from 'react';
import useClickOutside from '../utils/useClickOutside';

const InputLocation = () => {
  return <input type="text" className="w-full border bg-white  px-2 py-1" />;
};

const LocationSideBar = ({ setToggle }) => {
  const locationSideBarRef = useRef(null);
  useClickOutside(locationSideBarRef, () => {
    setToggle();
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-10 ml-[-1px] mt-[-1px] flex h-screen max-h-[100vh] bg-gray-dark bg-opacity-60">
      <div
        className="w-[40vw] bg-white pl-[3%] pr-[3%] pt-[3%]"
        ref={locationSideBarRef}
      >
        <button className="pb-4" onClick={() => setToggle()}>
          x
        </button>
        <InputLocation />
      </div>
    </div>
  );
};

export default LocationSideBar;
