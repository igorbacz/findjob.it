import { useEffect, useState } from "react";
import { InsideTabsBox, StyledFormControlLabel, StyledSwitch, Tab, TabBar, TabPanel, TabsList, OfferWrapper, StyledTabs } from "./styled";
import { BigOfferDetails } from "../../types/types";
import { useSearchParams } from "react-router-dom";
import MiniOffer from "../miniOffer/MiniOffer";
import SortMenu from "./components/SortMenu";
import { Button, Typography, useMediaQuery } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { theme } from "../../theme";
import { useSelector, useDispatch } from "react-redux";
import { allOffersSelector, filterAndSortSelector } from "../../service/offers/selectors";
import { getOffersData } from "../../service/offers/actions";
import LargeView from "../miniOffer/components/views/LargeView";
import DefaultView from "../miniOffer/components/views/DefaultView";

export const Tabs = () => {
  const [checked, setChecked] = useState(false);
  const offersList: BigOfferDetails[] = useSelector(allOffersSelector);
  const filteredOffers = useSelector(filterAndSortSelector);
  const [offers, setOffers] = useState<BigOfferDetails[]>(offersList);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentStackParam = searchParams.get("techStack");
  const currentSortParam = searchParams.get("sort");
  const remoteOffersParam = searchParams.get("remote");
  const isMatchMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchLarge = useMediaQuery(theme.breakpoints.down("lg"));
  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(getOffersData());
  }, []);

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

  const sortingBySalary = currentSortParam === "highest salary" || currentSortParam === "lowest salary";

  const filterSearch = () => {
    setOffers(filteredOffers(currentStackParam, remoteOffersParam, currentSortParam));
  };

  useEffect(() => {
    filterSearch();
  }, [offersList, currentStackParam, remoteOffersParam, currentSortParam]);

  return (
    <StyledTabs defaultValue={0}>
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
          {isMatchLarge
            ? offers
                .filter((amount) => amount.amount)
                .map((offer) => (
                  <LargeView
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
                ))
            : offers
                .filter((amount) => amount.amount)
                .map((offer) => (
                  <DefaultView
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
          {sortingBySalary
            ? offers
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
                ))
            : offers.map((offer) => {
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
    </StyledTabs>
  );
};
