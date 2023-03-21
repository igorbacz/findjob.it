import { Box, Typography } from "@mui/material";
import React from "react";
import { Price, Currency, OfferHeader } from "../styled";

export const OfferHeaderComponent = ({ name, price }: any) => {
  return (
    <OfferHeader>
      <Box>
        <Typography variant="headerFont">{name}</Typography>
      </Box>
      <Box>
        <Price>
          <Typography variant="H1Styled">{price}</Typography>
        </Price>
        <Currency>
          <Typography variant="H6Light">PLN</Typography>
        </Currency>
      </Box>
    </OfferHeader>
  );
};
