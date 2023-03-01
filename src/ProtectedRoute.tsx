import React, { Component, FunctionComponentElement } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userDataSelector } from "./service/user/selectors";

interface Props {
  children: FunctionComponentElement<Component>;
}

export const ProtectedRoute = ({ children }: Props) => {
  const userData: string = useSelector(userDataSelector);
  if (!userData) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
};
