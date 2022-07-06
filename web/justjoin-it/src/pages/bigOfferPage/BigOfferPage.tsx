import styled from "@emotion/styled";
import React from "react";
import { Box } from "@mui/material";
import { BigOffer } from "../../components/bigOffer/BigOffer";
import { GoogleMap } from "../../components/googleMap/googleMap";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { TopBar } from "../../components/topBar/TopBar";

export const PageContainer = styled(Box)`
  display: flex;
  flex: 1 1 0%;
  padding: 10px;
`;

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
