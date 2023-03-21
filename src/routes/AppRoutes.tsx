import { ROUTES } from "./routesMap";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminPanelPage } from "../pages/AdminPanelPage/AdminPanelPage";
import { BigOfferPage } from "../pages/bigOfferPage/BigOfferPage";
import { OfferFormPage } from "../pages/OfferFormPage/OfferFormPage";
import { OffersListPage } from "../pages/OffersListPage/OffersListPage";
import { OffersEmployerPage } from "../pages/offersEmployerPage/OffersEmployerPage";
import { RegisterPage } from "../pages/registerPage/RegisterPage";
import { SignInPage } from "../pages/signInPage/SignInPage";
import { ProtectedRoute } from "../ProtectedRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<OffersListPage />} />
      <Route path={ROUTES.login} element={<SignInPage componentStack={""} />} />
      <Route path={ROUTES.register} element={<RegisterPage componentStack={""} />} />
      <Route
        path={ROUTES.admin}
        element={
          <ProtectedRoute>
            <AdminPanelPage />
          </ProtectedRoute>
        }
      />
      <Route path={ROUTES.offersEmployer} element={<OffersEmployerPage />} />
      <Route
        path={ROUTES.addOffer}
        element={
          <ProtectedRoute>
            <OfferFormPage />
          </ProtectedRoute>
        }
      />
      <Route path={ROUTES.singleOffer} element={<BigOfferPage />} />
    </Routes>
  );
};
