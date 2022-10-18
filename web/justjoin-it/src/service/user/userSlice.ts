import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../types/types";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      console.log("logout");
    },
  },
});

export const { login, logout } = UserSlice.actions;
export const selectUser = (state: RootState) => state.user.isAuthenticated;
export default UserSlice.reducer;
