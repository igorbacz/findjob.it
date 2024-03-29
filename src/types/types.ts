import { ReactElement } from "react";
import { store } from "../service/store";

export interface SmallOffer {
  _id: string;
  dateAdded: string;
  remote: boolean;
  title: string;
  amount?: string;
  city: string;
  companyName?: string;
  logo: string;
  techStack: StackProp[];
  mainStack?: string;
  adminEmail?: string;
}

export interface BigOfferDetails extends SmallOffer {
  adress: string;
  companySize: string;
  exp: string;
  description: string;
  geolocation: GeoProp;
}

export class User {
  email: string = "";
  password?: string = "";
}

export type UserState = {
  isAuthenticated: boolean;
  user: any;
};

export class GeoProp {
  latitude: number | string;
  longitude: number | string;
}

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

export interface MiniTagType {
  days: number;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

