import { useDispatch } from "react-redux";
import apiClient from "../api/apiClient";
import { login, logout } from "../user/userSlice";

export const UserAuthentication = async (): Promise<void> => {
  const dispatch = useDispatch();
  const response = await apiClient.getReq("/authentication");
  const data = await response.json();
  if (response.ok) {
    dispatch(login(data));
  } else {
    dispatch(logout());
  }
};
