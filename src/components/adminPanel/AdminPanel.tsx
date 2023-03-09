import { Typography } from "@mui/material";
import { HeaderPostOffers, HeaderText, ImgBox } from "../postOffers/styled";
import AdminTabs from "./components/AdminTabs";
//TODO remove
export const AdminPanel = () => {
  return (
    <>
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
    </>
  );
};
