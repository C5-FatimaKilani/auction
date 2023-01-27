import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "" || localStorage.getItem("token"),
    isLoggedIn: localStorage.getItem("token") ? true : false,
    isSeller: false || localStorage.getItem("isSeller"),
  },
  reducers: {
    loggedIn: (state, action) => {
      state.token = action.payload.token;
      state.isSeller = action.payload.isSeller;

      state.isLoggedIn = true;

      localStorage.setItem("token", state.token);
      localStorage.setItem("isLogged", state.isLoggedIn);
      localStorage.setItem("isSeller", state.isSeller);
    },

    logout: (state, action) => {
      state.token = null;
      state.isLoggedIn = false;
      state.isSeller = false;
      localStorage.clear();
    },
  },
});

export const { loggedIn, logout } = authSlice.actions;
export default authSlice.reducer;
