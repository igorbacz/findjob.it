import { Box } from "@mui/system";
import React from "react";
import { PostOffers } from "../../components/postOffers/PostOffers";
import { TopBar } from "../../components/topBar/TopBar";

export const PostOffersPage = () => {
  return (
    <Box>
      <TopBar />
      <PostOffers />
    </Box>
  );
};
