import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
// import { apiSlice } from "../features/dogs/dogsApiSlice";

// Create/configure the store
export const store = configureStore({
  // reducers and slices
  reducer: {
    counter: counterReducer,
    // [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // middleware
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(apiSlice.middleware);
  // },
});
