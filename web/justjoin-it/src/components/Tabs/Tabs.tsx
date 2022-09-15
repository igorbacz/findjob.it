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
  // const offersStack: StackProp = useSelector(offersStackSelector2(currentStackParam));
  const offersHighestSallary: BigOfferDetails[] = useSelector(offersHighestSallarySelector);
  const offersLowesttSallary: BigOfferDetails[] = useSelector(offersLowesttSallarySelector);
  const offersLatest: BigOfferDetails[] = useSelector(offersLatestSelector);

  const remoteOffersParam = searchParams.get("filter");

  const isMatchMedium = useMediaQuery(theme.breakpoints.down("md"));

  const offersRemoteSearch = () => {
    if (!remoteOffersParam) {
      setOffers(offersList);
      return;
    } else setOffers(offersRemote);
  };

  const remoteParam = () => {
    if (!remoteOffersParam) {
      setSearchParams({ filter: "remote" });
    } else {
      setSearchParams({});
    }
  };
  const offersStackCallback: any = useSelector(offersStackSelector);

  const stackSearch = () => {
    if (!currentStackParam) {
      setOffers(offersList);
      return;
    }
    setOffers(offersStackCallback(currentStackParam));
  };

  const filterSearch = () => {
    if (!currentSortParam) {
      return;
    }
    if (currentSortParam === "highest salary") {
      setOffers(offersHighestSallary);
    } else if (currentSortParam === "lowest salary") {
      setOffers(offersLowesttSallary);
    } else if (currentSortParam === "latest") {
      setOffers(offersLatest);
    }
  };

  useEffect(() => {
    filterSearch();
  }, [currentSortParam]);

  useEffect(() => {
    offersRemoteSearch();
  }, [remoteOffersParam]);

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
                // onClick={offersRemoteSearch}
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
};;;;
