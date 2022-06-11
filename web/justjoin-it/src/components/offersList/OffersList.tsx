import React from "react";
import { GoogleMap } from "../googleMap/googleMap";
import { MiniOffer } from "../miniOffer/MiniOffer";
import "./style.css";

export const OffersList = () => {
  const offers = [
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
  ];
  return (
    <div className="offers__components">
      <MiniOffer logo={offers[0].logo} amount={offers[0].amount} title={offers[0].title} city={offers[0].city} companyName={offers[0].companyName} />
      <MiniOffer logo={offers[1].logo} amount={offers[1].amount} title={offers[1].title} city={offers[1].city} companyName={offers[1].companyName} />
      <MiniOffer logo={offers[2].logo} amount={offers[2].amount} title={offers[2].title} city={offers[2].city} companyName={offers[2].companyName} />
    </div>
  );
};
