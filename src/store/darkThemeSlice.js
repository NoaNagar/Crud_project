import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: false,
};

const darkTheme = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeTheme(state) {
      state.darkTheme = !state.darkTheme;
    },
    saveTeme() {
      let getTheme = localStorage.getItem("isDarkTheme");
      if (getTheme) {
        initialState.darkTheme = true;
      }
    },
  },
});

export const darkThemeActions = darkTheme.actions;

export default darkTheme.reducer;
