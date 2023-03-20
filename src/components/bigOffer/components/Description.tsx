import { Typography } from "@mui/material";
import React from "react";
import * as styled from "../styled";

export const Description = ({ description }: any) => {
  return (
    <styled.BigOfferSection>
      <styled.ContainerHeader>
        <Typography variant="subtitle2">Description</Typography>
      </styled.ContainerHeader>
      <styled.Content>
        <Typography variant="subtitle5">{description}</Typography>
      </styled.Content>
    </styled.BigOfferSection>
  );
};
