import { configureStore } from "@reduxjs/toolkit";
import basicReducer from "./features/basicSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    basic: basicReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
