import React from "react";
import MiniOffer from "../miniOffer/MiniOffer";
import { SmallOffer } from "../miniOffer/types";
import { Container, OffersContainer } from "./styled";

export const OffersList = () => {
  const offers: SmallOffer[] = [
    {
      logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
      title: "Java Script Developer",
      amount: 7800,
      city: "Kraków",
      companyName: "City Bank",
    },
    {
      logo: "https://bucket.justjoin.it/offers/company_logos/thumb/f15cb923f1f6d1a45de71b32922c542e7df91a01.jpg?1649687024",
      title: "React Developer",
      amount: 8900,
      city: "Gdańsk",
      companyName: "Neoteric",
    },

    {
      logo: "https://bucket.justjoin.it/offers/company_logos/thumb/cad5d063093baa141ec6dfb31c607a431f9dc601.png?1652167322",
      title: "Node Developer",
      amount: 10000,
      city: "Warszawa",
      companyName: "Cschark",
    },
    {
      logo: "https://bucket.justjoin.it/offers/company_logos/thumb/f15cb923f1f6d1a45de71b32922c542e7df91a01.jpg?1649687024",
      title: "React Developer",
      amount: 8900,
      city: "Gdańsk",
      companyName: "Neoteric",
    },
    {
      logo: "https://bucket.justjoin.it/offers/company_logos/thumb/f15cb923f1f6d1a45de71b32922c542e7df91a01.jpg?1649687024",
      title: "React Developer",
      amount: 8900,
      city: "Gdańsk",
      companyName: "Neoteric",
    },
    {
      logo: "https://bucket.justjoin.it/offers/company_logos/thumb/f15cb923f1f6d1a45de71b32922c542e7df91a01.jpg?1649687024",
      title: "React Developer",
      amount: 8900,
      city: "Gdańsk",
      companyName: "Neoteric",
    },
    {
      logo: "https://bucket.justjoin.it/offers/company_logos/thumb/f15cb923f1f6d1a45de71b32922c542e7df91a01.jpg?1649687024",
      title: "React Developer",
      amount: 8900,
      city: "Gdańsk",
      companyName: "Neoteric",
    },
    {
      logo: "https://bucket.justjoin.it/offers/company_logos/thumb/f15cb923f1f6d1a45de71b32922c542e7df91a01.jpg?1649687024",
      title: "React Developer",
      amount: 8900,
      city: "Gdańsk",
      companyName: "Neoteric",
    },
  ];
  return (
    <OffersContainer>
      <Container>
        {offers.map((offer) => {
          return <MiniOffer {...offer} />;
        })}
      </Container>
    </OffersContainer>
  );
};
