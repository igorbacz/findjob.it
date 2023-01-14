import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../types/types";

export const UserSlice = createSlice({
  name: "userState",
  initialState: {
    isAuthenticated: false,
    userEmail: null,
  },
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.userEmail = action.payload.email;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.userEmail = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = UserSlice.actions;
export const selectUser = (state: RootState) => state.userData;
export default UserSlice.reducer;
