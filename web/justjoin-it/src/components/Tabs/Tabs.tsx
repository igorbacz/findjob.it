import { useEffect, useState } from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import { InsideTabsBox, StyledFormControlLabel, StyledSwitch, Tab, TabBar, TabPanel, TabsList, OfferWrapper } from "./styled";
import { BigOfferDetails } from "../../types/types";
import { useSearchParams } from "react-router-dom";
import MiniOffer from "../miniOffer/MiniOffer";
import SortMenu from "./components/SortMenu";
import { Button, Typography, useMediaQuery } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { theme } from "../../theme";
import { useSelector } from "react-redux";
import {
  allOffersSelector,
  offersRemoteSelector,
  offersStackSelector,
  offersHighestSallarySelector,
  offersLowesttSallarySelector,
  offersLatestSelector,
} from "../../services/selectors";

export const Tabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentStackParam = searchParams.get("techStack");
  const offersList: BigOfferDetails[] = useSelector(allOffersSelector);
  const [offers, setOffers] = useState<BigOfferDetails[]>(offersList);
  const offersRemote: BigOfferDetails[] = useSelector(offersRemoteSelector);
  const currentSortParam = searchParams.get("sort");
  // const offersHighestSallary: BigOfferDetails[] = useSelector(offersHighestSallarySelector);
  const offersLowesttSallaryCallback = useSelector(offersLowesttSallarySelector);
  const offersLatestCallback = useSelector(offersLatestSelector);

  const [checked, setChecked] = useState(false);

  const remoteOffersParam = searchParams.get("remote");

  const offersStackCallback: any = useSelector(offersStackSelector);

  const offersHighestSallaryCallback = useSelector(offersHighestSallarySelector);

  const isMatchMedium = useMediaQuery(theme.breakpoints.down("md"));

  const remoteParam = () => {
    if (!remoteOffersParam) {
      searchParams.set("remote", "1");
      setChecked(true);
      setSearchParams(searchParams);
    }
    if (remoteOffersParam) {
      searchParams.delete("remote");
      setChecked(false);
      setSearchParams(searchParams);
    }
  };

  const offersSearch = () => {
    //with remote param
    if (!currentStackParam && !remoteOffersParam && !currentSortParam) {
      setOffers(offersList);
    } else if (remoteOffersParam && !currentStackParam && !currentSortParam) {
      setOffers(offersRemote);
    } else if (currentStackParam && remoteOffersParam && !currentSortParam) {
      setOffers(offersStackCallback(currentStackParam, remoteOffersParam)); //DZIAŁA BDB !!
    } else if (currentStackParam) {
      setOffers(offersStackCallback(currentStackParam, remoteOffersParam));
    }

    //with sort param
    else if (currentSortParam === "highest salary") {
      setOffers(offersHighestSallaryCallback(currentSortParam, remoteOffersParam));
    } else if (currentSortParam === "lowest salary") {
      setOffers(offersLowesttSallaryCallback(currentStackParam, remoteOffersParam));
    } else if (currentSortParam === "latest") {
      setOffers(offersLatestSelector);
    } else if (currentSortParam === "latest" && currentStackParam) {
      setOffers(offersStackCallback(currentStackParam, remoteOffersParam, currentSortParam));
    }
    //else if (currentSortParam === "highest salary" && remoteOffersParam) {
    //   setOffers(offersRemote); //TODO
    // }
  };

  useEffect(() => {
    offersSearch();
  }, [remoteOffersParam, currentSortParam, currentStackParam]);

  return (
    <TabsUnstyled defaultValue={0}>
      <TabBar>
        <TabsList defaultValue={0}>
          {!isMatchMedium ? <Tab>Offers with salary</Tab> : <Tab>With salary</Tab>}
          <Tab>
            All Offers
            <Typography variant="TabPink"> {offersList.length} offers</Typography>
          </Tab>
        </TabsList>
        <InsideTabsBox>
          {!isMatchMedium ? (
            <>
              <Button variant="text" color="secondary" startIcon={<NotificationsNoneIcon />}>
                Subscribe
              </Button>
              <StyledFormControlLabel
                value="start"
                control={<StyledSwitch color="primary" onClick={remoteParam} />}
                label="Remote"
                labelPlacement="start"
                checked={checked}
              />
            </>
          ) : null}
          <SortMenu />
        </InsideTabsBox>
      </TabBar>
      <TabPanel value={0}>
        <OfferWrapper>
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
        </OfferWrapper>
      </TabPanel>
      <TabPanel value={1}>
        <OfferWrapper>
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
        </OfferWrapper>
      </TabPanel>
    </TabsUnstyled>
  );
};
