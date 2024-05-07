import { createSlice } from "@reduxjs/toolkit";

const basicSlice = createSlice({
  name: "basic",
  initialState: {
    dark: JSON.parse(localStorage.getItem("mkhotamiRumahwebDark")) || false,
    openNav: false,
  },
  reducers: {
    toggleDark(state) {
      state.dark = !state.dark;
      localStorage.setItem("mkhotamiRumahwebDark", JSON.stringify(state.dark));
    },
    removeDark(state) {
      state.dark = false;
      localStorage.setItem("mkhotamiRumahwebDark", JSON.stringify(state.dark));
    },
    toggleOpenNav(state) {
      state.openNav = !state.openNav;
    },
    removeOpenNav(state) {
      state.openNav = false;
    },
  },
});

export const { toggleDark, removeDark, toggleOpenNav, removeOpenNav } = basicSlice.actions;
export default basicSlice.reducer;
