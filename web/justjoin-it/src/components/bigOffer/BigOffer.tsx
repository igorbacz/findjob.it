import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import { BigOfferDetails } from "./types";

export const BigOfferWrapper = styled(Box)`
  display: flex;
  flex: 1 1 50%;
`;

export const BigOfferContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderBox = styled(Box)`
  display: grid;
  width: 100%;
  border-radius: 0px 0px 4px 4px;
  padding: 40px 20px 0px;
  background: center center / cover no-repeat, linear-gradient(30deg, rgb(255, 199, 6), rgb(255, 175, 0));
`;

export const BigOffer = (props: BigOfferDetails) => {
  return (
    <BigOfferWrapper>
      <BigOfferContainer>
        <HeaderBox>
          <Box>Header</Box>
          <Box>sth</Box>
        </HeaderBox>
        <Box>Content</Box>
      </BigOfferContainer>
    </BigOfferWrapper>
  );
};
