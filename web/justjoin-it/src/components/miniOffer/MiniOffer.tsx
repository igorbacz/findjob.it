import React from "react";
import { Amount, Paragraph, Title, DetailsSection, LogoContainer, MiniOfferCon } from "./styled";
import { SmallOffer } from "./types";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MiniOffer = (props: SmallOffer) => {
  return (
    <MiniOfferCon>
      <LogoContainer>
        <img alt="logo" src={props.logo}></img>
      </LogoContainer>
      <Title>{props.title}</Title>
      <Amount>{props.amount} PLN</Amount>
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
