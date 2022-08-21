import * as React from "react";
import { useEffect, useState } from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import { InsideTabsBox, StyledFormControlLabel, StyledSwitch, Tab, TabBar, TabPanel, TabsList } from "./styled";
import { SortMenu } from "./components/SortMenu";
import { BigOfferDetails } from "../../types/types";
import { data } from "../../data";
import { useSearchParams } from "react-router-dom";
import MiniOffer from "../miniOffer/MiniOffer";

export default function Tabs() {
  const [value, setValue] = React.useState("0");
  const [offers, setOffers] = useState<BigOfferDetails[]>(data);
  const [searchParams, setSearchParams] = useSearchParams();

  const remoteOffersParam = searchParams.get("filter");

  const remoteOffersArray: BigOfferDetails[] = [];
  const [remoteOffers, setRemoteOffers] = useState<BigOfferDetails[]>(remoteOffersArray);

  const currentStackParam = searchParams.get("techStack");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const offersRemote = () => {
    //WORKS!!
  };

  const offersRemoteSearch = () => {
    data.forEach((item) => {
      if (item.remote) {
        remoteOffersArray.push(item);
      }
    });
    if (!remoteOffersParam) {
      console.log(remoteOffersArray);
      setRemoteOffers(remoteOffersArray);
      setSearchParams({ filter: "remote" });
    } else setSearchParams({});
    setOffers(remoteOffersArray); //TODO
  };

  const stackSearch = () => {
    //PRZYKŁAD DZIAŁA BDB !!!!
    if (!currentStackParam) {
      return;
    }
    const filteredOffers: BigOfferDetails[] = [];

    data.forEach((item) => {
      item.techStack.forEach((nameStack) => {
        if (nameStack.stackName === currentStackParam) {
          filteredOffers.push(item);
        }
      });
    });
    setOffers(filteredOffers);
  };

  useEffect(() => {
    offersRemote();
  }, [remoteOffers]);

  useEffect(() => {
    stackSearch();
  }, [currentStackParam]);

  return (
    <TabsUnstyled defaultValue={0}>
      <TabBar>
        <TabsList defaultValue={0}>
          <Tab>Offers with salary</Tab>
          <Tab>All Offers</Tab>
        </TabsList>
        <InsideTabsBox>
          <StyledFormControlLabel
            value="start"
            control={<StyledSwitch color="primary" onClick={offersRemoteSearch} />}
            label="Remote"
            labelPlacement="start"
          />
          <SortMenu />
        </InsideTabsBox>
      </TabBar>
      <TabPanel value={0}>
        {offers
          .filter((amount) => amount.amount)
          // .sort() TODO SORT LATEST
          .map((offer) => (
            <MiniOffer
              techStack={offer.techStack}
              dateAdded={offer.dateAdded}
              remote={offer.remote}
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
        {offers.map((offer) => {
          return (
            <MiniOffer
              techStack={offer.techStack}
              remote={offer.remote}
              key={offer._id}
              _id={offer._id}
              logo={offer.logo}
              title={offer.title}
              amount={offer.amount}
              companyName={offer.companyName}
              city={offer.city}
              dateAdded={offer.dateAdded}
            />
          );
        })}
      </TabPanel>
    </TabsUnstyled>
  );
}
