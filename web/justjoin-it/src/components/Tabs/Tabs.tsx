import { data } from "../../data";
import MiniOffer from "../miniOffer/MiniOffer";
import { TabsContainer, TabsList, TabPanel, Tabs, Tab } from "./styled";

export const BasicTabs = () => {
  return (
    <TabsContainer>
      <Tabs defaultValue={0}>
        <TabsList>
          <Tab>Offers with salary</Tab>
          <Tab>All offers</Tab>
        </TabsList>
        <TabPanel value={0}>
          {data
            .filter((amount) => amount.amount)
            .map((offer) => (
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
