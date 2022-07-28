import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: JSON.parse(localStorage.getItem("state"))?.theme?.value || "dark",
  },
  reducers: {
    changeTheme: (state) => {
      if (state.value === "dark") {
        state.value = "light";
      } else if (state.value === "light") {
        state.value = "dark";
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
