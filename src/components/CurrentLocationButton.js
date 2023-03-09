// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import {
//   addLocationAddress,
//   addLatitude,
//   addLongitude,
// } from '../utils/locationSlice';

// const CurrentLocationButton = ({ setToggle }) => {
//   const [latitude, setLatitude] = useState();
//   const [longitude, setLongitude] = useState();
//   const [intervalId, setIntervalId] = useState(null);

//   const dispatch = useDispatch();

//   function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//       error = 'Geolocation is not supported by this browser.';
//     }
//   }
//     getLocation();

//   function showPosition(position) {
//     setLatitude(position.coords.latitude);
//     setLongitude(position.coords.longitude);
//     dispatch(addLatitude(position.coords.latitude));
//     dispatch(addLongitude(position.coords.longitude));
//   }

//   async function getAddress(latitude, longitude) {
//     const response = await fetch(
//       `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude}%2C${longitude}&lang=en-US&apiKey=VnFLVrd5TM-RRRo3Oguq9SP2QPGLYB-D3-r9C0bLCFQ`
//     );
//     const data = await response.json();
//     console.log(data, 'LOCATION________(((_(_(_(');
//     dispatch(addLocationAddress(data?.items?.[0]?.address?.label));
//   }

//   useEffect(() => {
//     latitude && getAddress(latitude, longitude);
//     console.log('effect CALLLLALALALAL');
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [latitude, intervalId]);

//   return (
//     <button
//       className="my-4 w-full border p-2"
//       onClick={() => {
//         getLocation();
//         setIntervalId(
//           setInterval(() => {
//             console.log('CALLLLALALALAL');
//             setToggle();
//           }, 4000)
//         );
//       }}
//     >
//       Get current location
//     </button>
//   );
// };

// export default CurrentLocationButton;
