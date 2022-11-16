import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import { HeaderPostOffers, HeaderText, ImgBox } from "../postOffers/styled";
import AdminTabs from "./components/AdminTabs";

export const AdminPanel = () => {
  return (
    <Fragment>
      <HeaderPostOffers>
        <HeaderText>
          <Typography component={"span"} variant="H2Styled">
            Dashboard
          </Typography>
        </HeaderText>
        <ImgBox sx={{ display: { xs: "none", md: "none", lg: "block", xl: "block" } }}>
          <img src="https://justjoin.it/next-assets/addOffer/technology-header.svg" alt="ikony"></img>
        </ImgBox>
      </HeaderPostOffers>
      <AdminTabs />
    </Fragment>
  );
};
