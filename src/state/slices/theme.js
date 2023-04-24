import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    darkMode: true
}
export const themeMode = createSlice({
    name: "theme",
    initialState,
    reducers: {
        darkMode: (state, action) => {
            state.darkMode = action.payload
        }
    }
});
export const {darkMode} = themeMode.actions;
export default themeMode.reducer;