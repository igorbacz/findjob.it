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
import { RootState } from "../../services/store";

export default function Tabs() {
  const offersList: BigOfferDetails[] = useSelector((state: RootState) => state);

  const [offers, setOffers] = useState<BigOfferDetails[]>(offersList);
  const [searchParams, setSearchParams] = useSearchParams();

  const remoteOffersParam = searchParams.get("filter");

  const currentStackParam = searchParams.get("techStack");

  const currentSortParam = searchParams.get("sort");

  const isMatchMedium = useMediaQuery(theme.breakpoints.down("md"));

  const remoteOffersArray: BigOfferDetails[] = [];

  const offersRemoteSearch = () => {
    if (!remoteOffersParam) {
      setOffers(offersList);
      return;
    } else
      offersList.forEach((item) => {
        if (item.remote) {
          remoteOffersArray.push(item);
        }
      });
    setOffers(remoteOffersArray);
  };

  const remoteParam = () => {
    if (!remoteOffersParam) {
      setSearchParams({ filter: "remote" });
    } else {
      setSearchParams({});
    }
  };
  const stackSearch = () => {
    if (!currentStackParam) {
      setOffers(offersList);
      return;
    }
    const filteredOffers: BigOfferDetails[] = [];

    offersList.forEach((item) => {
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
      const sortOffers: BigOfferDetails[] = offers?.slice().sort((a, b) => new Date(b.dateAdded).valueOf() - new Date(a?.dateAdded).valueOf());
      setOffers(sortOffers);
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
}
