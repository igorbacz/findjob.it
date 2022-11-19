import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import NextWeekIcon from "@mui/icons-material/NextWeek";
import { useSelector } from "react-redux";
import { allOffersSelector } from "../../../service/offers/selectors";
import { BigOfferDetails, UserState } from "../../../types/types";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import usePagination from "../../../hooks/usePagination";
import { OfferWrapper } from "../../Tabs/styled";
import MiniOfferAdmin from "./MiniOfferAdmin";
import { userDataSelector } from "../../../service/user/selectors";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const AdminTabs = () => {
  const [value, setValue] = React.useState(0);
  const data: BigOfferDetails[] = useSelector(allOffersSelector);
  const userData: UserState = useSelector(userDataSelector);
  const userEmail: string = userData.user;

  const userOffers = data.filter((offer) => {
    return offer.adminEmail === userEmail;
  });

  useEffect(() => {
    console.log(userOffers);
  }, [userOffers]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(userOffers.length / PER_PAGE);
  const _DATA = usePagination(userOffers, PER_PAGE);

  const handleChangePagination = (e: any, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab icon={<NextWeekIcon />} label="Your offers" {...a11yProps(0)} />
          <Tab icon={<PersonPinIcon />} label="Your details" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <OfferWrapper>
          {userOffers
            ? _DATA
                .currentData()
                .map((offer: BigOfferDetails) => (
                  <MiniOfferAdmin
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
            : null}
        </OfferWrapper>
        <Pagination count={count} page={page} color="primary" onChange={handleChangePagination} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        email : {userEmail}
      </TabPanel>
    </Box>
  );
};;;
export default AdminTabs;
