import { RootState } from "../../types/types";

export const userDataSelector = (state: RootState) => state.user;

export const isAuthenticatedSelector = (state: RootState) => state.user.isAuthenticated;
