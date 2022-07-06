import { Box } from "@mui/material";
import React from "react";
import { GoogleMap } from "../../components/googleMap/googleMap";
import { OffersList } from "../../components/offersList/OffersList";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { TopBar } from "../../components/topBar/TopBar";
import { PageContainer } from "../bigOfferPage/BigOfferPage";

export const OffersListPage = () => {
  return (
    <Box>
      <TopBar />
      <SearchBar />
      <PageContainer>
        <OffersList />
        <GoogleMap />
      </PageContainer>
    </Box>
  );
};
