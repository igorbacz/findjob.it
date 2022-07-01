import React from "react";
import { Amount, Paragraph, Title, DetailsSection, LogoContainer, MiniOfferCon } from "./styled";
import { SmallOffer } from "./types";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const AmountBox = styled(Box)`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  color: rgb(30, 198, 108);
  margin-right: 30px;
  display: flex;
  align-items: center;
`;

const MiniOffer = (props: SmallOffer) => {
  return (
    <MiniOfferCon>
      <LogoContainer>
        <img alt="logo" src={props.logo}></img>
      </LogoContainer>
      <Title>{props.title}</Title>
      <AmountBox>
        <Typography variant="h5">{props.amount} PLN</Typography>
      </AmountBox>
      <DetailsSection>
        <BusinessIcon />
        <Paragraph>{props.companyName}</Paragraph>
        <LocationOnIcon />
        <Paragraph>{props.city}</Paragraph>
      </DetailsSection>
    </MiniOfferCon>
  );
};

export default MiniOffer;
