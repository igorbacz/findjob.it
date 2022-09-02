import { ReactElement } from "react";

export class SmallOffer {
  _id: string;
  dateAdded: string;
  remote: boolean;
  title: string;
  amount?: number;
  city: string;
  companyName: string;
  logo: string;
  techStack: StackProp[];
}

export class BigOfferDetails extends SmallOffer {
  adress: string;
  companySize: number;
  exp: string;
  description: string;
  geolocation: GeoProp;
}

export type GeoProp = {
  latitude: number;
  longitude: number;
};

export type StackProp = {
  stackName: string;
  stackLvl?: string;
  value?: number;
};

export interface Icon {
  _id?: string;
  logo: ReactElement;
  stack?: string;
  stackFullName?: string;
  background?: string;
  url?: string;
}
