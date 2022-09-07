import { ReactElement } from "react";

export class SmallOffer {
  _id: string;
  dateAdded?: string;
  remote: boolean;
  title: string;
  amount?: string;
  city: string;
  companyName: string;
  logo: string;
  techStack: StackProp[];
}

export class BigOfferDetails extends SmallOffer {
  adress: string;
  companySize: string;
  exp: string;
  description: string;
  geolocation?: GeoProp;
}

export class User {
  email: string = "";
  password: string = "";
  token?: any = "";
}

export type GeoProp = {
  latitude: string;
  longitude: string;
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
