import {configureStore} from "@reduxjs/toolkit";
import themeMode from "./slices/theme";
import langUI from "./slices/lang";
import locationState from "./slices/location";

export const rootReducer = {
    theme: themeMode,
    lang: langUI,
    locationState: locationState
};
export const store = configureStore({
    reducer: rootReducer,
});
