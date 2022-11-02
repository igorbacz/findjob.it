import React, { Component, FunctionComponentElement, ReactChild, ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userDataSelector } from "./service/user/selectors";
import { UserState } from "./types/types";

interface Props {
  children: FunctionComponentElement<Component>;
}

export const ProtectedRoute = ({ children }: Props) => {
  const user: UserState = useSelector(userDataSelector);
  const userData = user.user;
  if (!userData) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
};
