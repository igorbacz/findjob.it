type OffersContent = {
  content: string;
  icon: boolean;
};
export type VariantOffer = {
  name: string;
  price: number;
  content: OffersContent[];
};
const offerContentBasic: OffersContent[] = [
  { content: "Offer for 30 day", icon: true },
  { content: "Job ad in technological summaries", icon: true },
  { content: "No Individual Customer Care", icon: false },
  { content: "No bump ups", icon: false },
  { content: "No promotion in Social Media", icon: false },
  { content: "No individual copy", icon: false },
  { content: "No Social boost - paid job ads promotion in social media with budget provided by the client", icon: false },
];
const offerContentPremium: OffersContent[] = [
  { content: "Offer for 30 day", icon: true },
  { content: "Job ad in technological summaries", icon: true },
  { content: " Individual Customer Care", icon: true },
  { content: "1 automatic bump-up", icon: true },
  { content: "No promotion in Social Media", icon: false },
  { content: "No individual copy", icon: false },
  { content: "No Social boost - paid job ads promotion in social media with budget provided by the client", icon: false },
];

const offerContentBusiness: OffersContent[] = [
  { content: "Offer for 30 day", icon: true },
  { content: "Job ad in technological summaries", icon: true },
  { content: " Individual Customer Care", icon: true },
  { content: "2 automatic bump-up", icon: true },
  { content: "Individual promotion in Social Media", icon: true },
  { content: "Individual job ad copy + audit", icon: true },
  { content: "Optional Social boost - paid job ads promotion in social media with budget provided by the client", icon: true },
];
export const variantsOfOffers: VariantOffer[] = [
  {
    name: "Basic",
    price: 390,
    content: offerContentBasic,
  },
  {
    name: "Premium",
    price: 490,
    content: offerContentPremium,
  },
  {
    name: "Business",
    price: 690,
    content: offerContentBusiness,
  },
];
