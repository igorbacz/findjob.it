import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

export const HeaderPostOffers = styled(Box)`
  background: url(https://justjoin.it/next-assets/addOffer/header-background.jpg);
  background-size: cover;
  background-position: center center;
  color: white;
  display: flex;
`;

export const HeaderIcons = styled(Box)``;

export const HeaderText = styled(Box)`
  padding: 50px 80px;
  text-align: left;
`;
export const OffersBox = styled(Box)`
  padding: 40px;
  width: 100%;
  background-color: #fafafa;
`;

export const ContentOffers = styled(Box)`
  display: flex;
  justify-content: space-around;
`;

export const OfferBox = styled(Box)`
  border: 1px solid #e7e9ed;
  border-radius: 10px;
  box-shadow: 0 15px 30px -1px rgb(214 231 249 / 55%);
  width: 100%;
  margin: 0 20px;
`;

export const OfferHeader = styled(Box)``;

export const Option = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

export const Price = styled.span`
  font-size: 50px;
  font-weight: bold;
`;

export const Currency = styled.span`
  color: #cfd8dc;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.38px;
`;

export const ContentOffer = styled(Box)``;

export const PostOffers = () => {
  return (
    <Box>
      <HeaderPostOffers>
        <HeaderText>
          <h1>Dzięki nam dotrzesz skutecznie do społeczności ponad 400 tysięcy polskich programistów</h1>
        </HeaderText>
        <HeaderIcons>
          <img src="https://justjoin.it/next-assets/addOffer/technology-header.svg" alt="ikony"></img>
        </HeaderIcons>
      </HeaderPostOffers>
      <OffersBox>
        <h3>Poznaj ogłoszenia na justjoin.it</h3>
        <ContentOffers>
          <OfferBox>
            <OfferHeader>
              <Option>Basic</Option>
              <Price>390</Price>
              <Currency>PLN</Currency>
            </OfferHeader>
            <ContentOffer></ContentOffer>
          </OfferBox>
          <OfferBox>Box</OfferBox>
          <OfferBox>Box</OfferBox>
        </ContentOffers>
      </OffersBox>
    </Box>
  );
};
