import styled from "@emotion/styled";
import React from "react";
import { Box } from "@mui/material";
import { BigOffer } from "../../components/bigOffer/BigOffer";
import { GoogleMap } from "../../components/googleMap/googleMap";

export const PageContainer = styled(Box)`
  display: flex;
  flex: 1 1 0%;
  padding: 10px;
`;

export const BigOfferPage = () => {
  return (
    <PageContainer>
      <BigOffer />
      <GoogleMap />
    </PageContainer>
  );
};
