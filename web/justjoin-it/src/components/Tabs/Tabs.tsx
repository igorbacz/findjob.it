import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { data } from "../../data";
import { BigOfferDetails } from "../../types/types";
import MiniOffer from "../miniOffer/MiniOffer";
import { TabsContainer, TabsList, TabPanel, Tabs, Tab } from "./styled";

export const BasicTabs = () => {
  const [serachParams] = useSearchParams();
  const currentStack = serachParams.get("techStack");
  const [offers, setOffers] = useState<BigOfferDetails[]>(data);
  const stackSearch = () => {
    if (!currentStack) {
      return;
    }
    const filteredOffers: BigOfferDetails[] = [];

    data.forEach((item) => {
      item.techStack.forEach((nameStack) => {
        if (nameStack.stackName === currentStack) {
          filteredOffers.push(item);
        }
      });
    });
    setOffers(filteredOffers);
    console.log(filteredOffers);
  };
  console.log(serachParams.get("techStack"));
  useEffect(() => {
    stackSearch();
  }, [currentStack]);
  return (
    <TabsContainer>
      <Tabs defaultValue={0}>
        <TabsList>
          <Tab>Offers with salary</Tab>
          <Tab>All offers</Tab>
        </TabsList>
        <TabPanel value={0}>
          {offers.map((offer) => (
            <MiniOffer
              key={offer._id}
              _id={offer._id}
              logo={offer.logo}
              title={offer.title}
              amount={offer.amount}
              companyName={offer.companyName}
              city={offer.city}
            />
          ))}
        </TabPanel>
        <TabPanel value={1}>
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
        </TabPanel>
      </Tabs>
    </TabsContainer>
  );
};

export default BasicTabs;
