import { configureStore } from "@reduxjs/toolkit";
import themeMode from "./slices/theme";
import langUI from "./slices/lang";

export const rootReducer = {
  theme: themeMode,
  lang: langUI,
};
export const store = configureStore({
  reducer: rootReducer,
});
