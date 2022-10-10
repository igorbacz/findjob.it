import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import NextWeekIcon from "@mui/icons-material/NextWeek";
import { useSelector } from "react-redux";
import { allOffersSelector } from "../../../services/selectors";
import { BigOfferDetails } from "../../../types/types";
import { useState } from "react";
import { data } from "../../../data";
import { Pagination } from "@mui/material";
import usePagination from "../../../hooks/usePagination";
import { OfferWrapper } from "../../Tabs/styled";
import MiniOfferAdmin from "../../miniOfferAdmin/MiniOfferAdmin";

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
  const offersList: BigOfferDetails[] = useSelector(allOffersSelector);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChangePagination = (e: any, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab icon={<PersonPinIcon />} label="Your details" {...a11yProps(0)} />
          <Tab icon={<NextWeekIcon />} label="Your offers" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        email:
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OfferWrapper>
          {_DATA.currentData().map((offer: BigOfferDetails) => (
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
          ))}
        </OfferWrapper>
        <Pagination count={count} page={page} color="primary" onChange={handleChangePagination} />
      </TabPanel>
    </Box>
  );
};
export default AdminTabs;
