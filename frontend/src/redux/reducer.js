import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    setLogout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setMode, setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;