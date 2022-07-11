import React from "react";
import { Paragraph, Title, DetailsSection, LogoContainer, MiniOfferCon, AmountBox } from "./styled";
import { SmallOffer } from "./types";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";


const MiniOffer = ({ logo, title, amount, companyName, city }: SmallOffer) => {
  return (
    <MiniOfferCon>
      <LogoContainer>
        <img alt="logo" src={logo}></img>
      </LogoContainer>
      <Title>
        <Typography variant="subtitle4">{title}</Typography>
      </Title>
      <AmountBox>
        <Typography variant="subtitle3">{amount} PLN</Typography>
      </AmountBox>
      <DetailsSection>
        <BusinessIcon />
        <Paragraph>{companyName}</Paragraph>
        <LocationOnIcon />
        <Paragraph>{city}</Paragraph>
      </DetailsSection>
    </MiniOfferCon>
  );
};

export default MiniOffer;
