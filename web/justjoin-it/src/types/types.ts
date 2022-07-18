import { ReactElement } from "react";

export interface SmallOffer {
  _id: string;
  title: string;
  amount?: number;
  city: string;
  companyName: string;
  logo: string;
}

export interface BigOfferDetails extends SmallOffer {
  adress: string;
  companySize: number;
  exp: string;
  techStack: StackProp[];
  description: string;
}

export type StackProp = {
  stackName: string;
  stackLvl: string;
  value: number;
};

export interface Icon {
  _id?: string;
  ikona: ReactElement;
  stack: string;
  background: string;
}
