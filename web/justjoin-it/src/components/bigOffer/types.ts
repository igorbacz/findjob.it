import { SmallOffer } from "../miniOffer/types";

export interface BigOfferDetails extends SmallOffer {
  adress?: string;
  companySize?: number;
  exp?: string;
  new?: boolean;
  techStack?: any;
  description?: string;
}

export interface StackProp {
  stackName: string;
  stackLvl: string;
  value: number;
}
