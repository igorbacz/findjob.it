import { RootState } from "../../types/types";

export const userDataSelector = (state: RootState) => state.userData.userEmail;

export const userObjectSelector = (state: RootState) => state.userData;

export const isAuthenticatedSelector = (state: RootState) => state.userData.isAuthenticated;
