import React from "react";
import { Offer } from "./types";
import { Amount, AmountWrapper, Description, Details, Img, Paragraph, Title, Wrapper } from "./styled";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { Box } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styled from "@emotion/styled";

export const DetailsSection = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgb(153, 161, 171);
`;

export const DescriptionTop = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export const Top = styled(Box)`
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 100px;
`;

export const MiniOffer = (props: Offer) => {
  return (
    <Wrapper>
      <Img src={props.logo}></Img>
      <Description>
        <DescriptionTop>
          <Top>
            <Title>{props.title}</Title>
            <Amount>{props.amount} PLN</Amount>
          </Top>
        </DescriptionTop>

        <Details>
          <DetailsSection>
            <BusinessIcon />
            <Paragraph>{props.companyName}</Paragraph>
          </DetailsSection>
          <DetailsSection>
            <LocationOnIcon />
            <Paragraph>{props.city}</Paragraph>
          </DetailsSection>
        </Details>
      </Description>
      <AmountWrapper></AmountWrapper>
    </Wrapper>
  );
};
