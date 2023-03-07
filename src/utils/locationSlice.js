import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    locationAddress: '',
    coordinates: {
      latitude: '',
      longitude: '',
    },
  },
  reducers: {
    addLocationAddress: (state, action) => {
      state.locationAddress = action.payload;
    },

    addLatitude: (state, action) => {
      state.coordinates.latitude = action.payload;
    },
    addLongitude: (state, action) => {
      state.coordinates.longitude = action.payload;
    },
  },
});

export const { addLocationAddress, addLatitude, addLongitude } =
  locationSlice.actions;

export default locationSlice.reducer;
