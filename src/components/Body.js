import React, { useState, useEffect } from 'react';
import TopImagesCarousel from './TopImagesCarousel';
import Filter from './Filter';
import { useRestaurants, useOnline } from '../utils';
import IsOnline from './IsOnline';
import RestaurantList from './RestaurantList';
import { useDispatch, useSelector } from 'react-redux';
import {
  addLocationAddress,
  addLatitude,
  addLongitude,
} from '../utils/locationSlice';
// import useAddress from '../utils/useAddress';

const Body = () => {
  const [restaurants, carousels, isLoading, mainCategories] = useRestaurants();

  // useAddress();
  //

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const chosenLatitude = useSelector(
    (store) => store.location.coordinates.latitude
  );
  console.log(chosenLatitude, 'CHOSEN LATITUDE');

  const dispatch = useDispatch();

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
    dispatch(addLatitude(position.coords.latitude));
    dispatch(addLongitude(position.coords.longitude));
  }

  async function getAddress(latitude, longitude) {
    const response = await fetch(
      `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude}%2C${longitude}&lang=en-US&apiKey=VnFLVrd5TM-RRRo3Oguq9SP2QPGLYB-D3-r9C0bLCFQ`
    );
    const data = await response.json();
    console.log(data, 'LOCATION________(((_(_(_(');
    dispatch(addLocationAddress(data?.items?.[0]?.address?.label));
  }

  useEffect(() => {
    latitude && getAddress(latitude, longitude);
    console.log('effect CALLLLALALALAL');
  }, [latitude]);


    if (chosenLatitude.length < 2) getLocation();

  // if

  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <main>
        <IsOnline />
      </main>
    );
  }

  return (
    <main>
      <TopImagesCarousel carousels={carousels} isLoading={isLoading} />
      <Filter
        setRestaurants={() => changeRestaurant()}
        mainCategories={mainCategories}
      />
      <RestaurantList restaurants={restaurants} isLoading={isLoading} />
    </main>
  );
};

export default Body;
