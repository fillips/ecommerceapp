import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authUser: {loggedIn: false, token: ""}
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUser(state, action) {
      state.authUser = action.payload
    },
  },
});

export const { authUser } = authSlice.actions;
export default authSlice.reducer;
