import React from "react";
import { SmallOffer } from "../../types/types";
import MiniOffer from "../miniOffer/MiniOffer";
import { data } from "../../data";

import { Container, OffersContainer } from "./styled";

export const OffersList = () => {
  return (
    <OffersContainer>
      <Container>
        {data.map((offer) => {
          return (
            <MiniOffer
              key={offer._id}
              _id={offer._id}
              logo={offer.logo}
              title={offer.title}
              amount={offer.amount}
              companyName={offer.companyName}
              city={offer.city}
            />
          );
        })}
      </Container>
    </OffersContainer>
  );
};;
