import React, { Component, FunctionComponentElement } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticatedSelector, userDataSelector } from "./service/user/selectors";
import { ROUTES } from "./routes/routesMap";

interface Props {
  children: FunctionComponentElement<Component>;
}

export const ProtectedRoute = ({ children }: Props) => {
  const isAuth: boolean = useSelector(isAuthenticatedSelector);
  if (!isAuth) {
    return <Navigate to={ROUTES.login} replace />;
  }
  return children;
};
