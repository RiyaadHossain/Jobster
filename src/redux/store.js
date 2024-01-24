import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import sidebarItemSlice from "./slices/sidebarItemSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    sidebarItem: sidebarItemSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
