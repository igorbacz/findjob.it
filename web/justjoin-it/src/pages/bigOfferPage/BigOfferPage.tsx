import React from "react";
import { Box } from "@mui/material";
import { BigOffer } from "../../components/bigOffer/BigOffer";
import { GoogleMap } from "../../components/googleMap/googleMap";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { TopBar } from "../../components/topBar/TopBar";
import { PageContainer } from "./styled";

export const BigOfferPage = () => {
  return (
    <Box>
      <TopBar />
      <SearchBar />
      <PageContainer>
        <BigOffer />
        <GoogleMap />
      </PageContainer>
    </Box>
  );
};
