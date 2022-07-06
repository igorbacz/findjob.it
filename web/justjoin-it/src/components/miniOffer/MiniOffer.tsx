import React from "react";
import { Paragraph, Title, DetailsSection, LogoContainer, MiniOfferCon, AmountBox } from "./styled";
import { SmallOffer } from "./types";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";


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
