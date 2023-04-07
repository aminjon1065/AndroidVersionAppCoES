import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    langInterface: 'ru'
}

export const langUI = createSlice({
    name: "langInterface",
    initialState,
    reducers: {
        langInterface: (state, action) => {
            state.langInterface = action.payload
        }
    }
});

export const {langInterface} = langUI.actions;

export default langUI.reducer;