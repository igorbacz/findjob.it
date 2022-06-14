import React from "react";
import { Offer } from "./types";
import { Amount, AmountWrapper, Description, Details, Img, Paragraph, Title, Wrapper } from "./styled";

export const MiniOffer = (props: Offer) => {
  return (
    <Wrapper>
      <Img src={props.logo}></Img>
      <Description>
        <Title>{props.title}</Title>
        <Details>
          <Paragraph>{props.companyName}</Paragraph>
          <Paragraph>{props.city}</Paragraph>
        </Details>
      </Description>
      <AmountWrapper>
        <Amount>{props.amount} PLN</Amount>
      </AmountWrapper>
    </Wrapper>
  );
};
