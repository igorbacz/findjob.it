import React from "react";
import { GoogleMap } from "../../components/googleMap/googleMap";
import { OffersList } from "../../components/offersList/OffersList";
import { PageContainer } from "../bigOfferPage/BigOfferPage";

export const OffersListPage = () => {
  return (
    <PageContainer>
      <OffersList />
      <GoogleMap />
    </PageContainer>
  );
};
