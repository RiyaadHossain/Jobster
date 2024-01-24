import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTab: "/dashboard",
};

export const sidebarItemSlice = createSlice({
  name: "sidebarItem",
  initialState,
  reducers: {
    selectTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { selectTab } = sidebarItemSlice.actions;

export default sidebarItemSlice.reducer;
