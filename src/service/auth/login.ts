import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routesMap";
import { User } from "../../types/types";
import apiClient from "../api/apiClient";
import { login } from "../user/userSlice";

export const Login = async (credentials: User) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  try {
    const response = await apiClient.postReq<any>("/authentication/login", credentials);
    const cookie = response.headers.get("Set-Cookie");
    document.cookie = cookie;
    dispatch(login(credentials));
    navigate(ROUTES.home);
    return response.json();
  } catch (error) {
    const errorMessage = "Authentication failed!";
    alert(errorMessage);
    console.log(error);
  }
};
