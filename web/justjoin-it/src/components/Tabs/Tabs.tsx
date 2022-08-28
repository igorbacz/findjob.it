import * as React from "react";
import { useEffect, useState } from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import { InsideTabsBox, StyledFormControlLabel, StyledSwitch, Tab, TabBar, TabPanel, TabsList } from "./styled";
import { BigOfferDetails } from "../../types/types";
import { data } from "../../data";
import { useSearchParams } from "react-router-dom";
import MiniOffer from "../miniOffer/MiniOffer";
import SortMenu from "./components/SortMenu";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import styled from "@emotion/styled";
import { theme } from "../../theme";

export const Boxe = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function Tabs() {
  const [value, setValue] = React.useState("0");
  const [offers, setOffers] = useState<BigOfferDetails[]>(data);
  const [searchParams, setSearchParams] = useSearchParams();

  const remoteOffersParam = searchParams.get("filter");

  const remoteOffersArray: BigOfferDetails[] = [];
  const [remoteOffers, setRemoteOffers] = useState<BigOfferDetails[]>(remoteOffersArray);

  const currentStackParam = searchParams.get("techStack");

  const currentSortParam = searchParams.get("sort");
  const isMatchMedium = useMediaQuery(theme.breakpoints.down("md"));
  const offersRemote = () => {};

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

  const filterSearch = () => {
    if (!currentSortParam) {
      return;
    }

    if (currentSortParam === "highest salary") {
      const sortOffers: BigOfferDetails[] = offers?.filter((amount) => amount.amount).sort((a, b) => b?.amount - a?.amount);
      setOffers(sortOffers);
    } else if (currentSortParam === "lowest salary") {
      const sortOffers: BigOfferDetails[] = offers?.filter((amount) => amount.amount).sort((a, b) => a?.amount - b?.amount);
      setOffers(sortOffers);
    } else if (currentSortParam === "latest") {
      const sortOffers: BigOfferDetails[] = offers?.sort((a, b) => new Date(b.dateAdded).valueOf() - new Date(a.dateAdded).valueOf());
      setOffers(sortOffers);
    }
  };

  useEffect(() => {
    filterSearch();
  }, [currentSortParam]);

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
          {!isMatchMedium ? <Tab>Offers with salary</Tab> : <Tab>With salary</Tab>}
          <Tab>
            All Offers
            <Typography variant="TabPink"> {data.length} offers</Typography>
          </Tab>
        </TabsList>
        <InsideTabsBox>
          {!isMatchMedium ? (
            <Button variant="text" color="secondary" startIcon={<NotificationsNoneIcon />}>
              Subscribe
            </Button>
          ) : null}
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
        <Boxe>
          {offers
            .filter((amount) => amount.amount)
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
        </Boxe>
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
