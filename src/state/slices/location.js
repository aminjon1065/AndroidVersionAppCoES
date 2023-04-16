import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
    name: 'location',
    initialState: { latitude: null, longitude: null },
    reducers: {
        updateLocation(state, action) {
            const { latitude, longitude } = action.payload;
            state.latitude = latitude;
            state.longitude = longitude;
        },
    },
});

export const { updateLocation } = locationSlice.actions;
export default locationSlice.reducer;
