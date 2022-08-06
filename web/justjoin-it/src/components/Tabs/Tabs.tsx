import { Box, FormControlLabel, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { data } from "../../data";
import { BigOfferDetails } from "../../types/types";
import MiniOffer from "../miniOffer/MiniOffer";
import { SortMenu } from "./components/SortMenu";
import { TabsContainer, TabsList, TabPanel, Tabs, Tab, InsideTabsBox, StyledSwitch, StyledFormControlLabel } from "./styled";

export const BasicTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentStack = searchParams.get("techStack");
  const [offers, setOffers] = useState<BigOfferDetails[]>(data);
  const remote = searchParams.get("filter");

  const currentTab = searchParams.get("with-salary"); //TODO

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
  };

  const offerWithSalarySearch = () => {
    setSearchParams({ filter: "with-salary" });
    //TODO
  };

  const offersRemoteSearch = () => {
    if (remote) {
      setSearchParams({});
      setOffers(offers);
    } else setSearchParams({ filter: "remote" });
    setOffers(remoteOffers);
  };

  const remoteOffers: BigOfferDetails[] = [];
  const offersRemote = () => {
    if (!remote) {
      data.forEach((item) => {
        if (item.remote) {
          remoteOffers.push(item);
        }
      });
    }
  };

  console.log(remoteOffers);

  useEffect(() => {
    offersRemote();
  }, [remote]);

  useEffect(() => {
    stackSearch();
  }, [currentStack]);

  return (
    <TabsContainer>
      <Tabs defaultValue={1}>
        <TabsList>
          <Box>
            <Tab onClick={offerWithSalarySearch}>Offers with salary</Tab>
            <Tab onClick={() => setSearchParams({})}>All offers</Tab>
          </Box>
          <InsideTabsBox>
            <StyledFormControlLabel
              value="start"
              control={<StyledSwitch color="primary" onClick={offersRemoteSearch} />}
              label="Remote"
              labelPlacement="start"
            />
            <SortMenu />
          </InsideTabsBox>
        </TabsList>
        <TabPanel value={0}>
          {offers
            .filter((amount) => amount.amount)
            // .sort() TODO SORT LATEST
            .map((offer) => (
              <MiniOffer
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
      </Tabs>
    </TabsContainer>
  );
};

export default BasicTabs;
