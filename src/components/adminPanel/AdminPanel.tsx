import { Typography } from "@mui/material";
import { BACKGROUND_URL } from "../../const/backgroundUrl";
import { HeaderPostOffers, HeaderText, ImgBox } from "../offerEmployer/styled";
import AdminTabs from "./components/AdminTabs";

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
          <img src={BACKGROUND_URL} alt="ikony"></img>
        </ImgBox>
      </HeaderPostOffers>
      <AdminTabs />
    </>
  );
};
