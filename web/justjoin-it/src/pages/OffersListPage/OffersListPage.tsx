import { Box } from "@mui/material";
import React from "react";
import { GoogleMap } from "../../components/googleMap/googleMap";
import { OffersList } from "../../components/offersList/OffersList";
import { SearchBar } from "../../components/searchBar/SearchBar";
import BasicTabs from "../../components/Tabs/Tabs";
import { TopBar } from "../../components/topBar/TopBar";
import { PageContainer } from "../bigOfferPage/styled";

export const OffersListPage = () => {
  return (
    <Box>
      <TopBar />
      <SearchBar />
      <PageContainer>
        <BasicTabs />
        <GoogleMap />
      </PageContainer>
    </Box>
  );
};
