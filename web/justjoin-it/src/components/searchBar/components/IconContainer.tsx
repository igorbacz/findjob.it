import { Typography } from "@mui/material";
import React from "react";
import { FaCss3 } from "react-icons/fa";
import { CSSButton, IconText, IconWrapper } from "../styled";

export const IconContainer = () => {
  return (
    <IconWrapper>
      <CSSButton>
        <FaCss3 />
      </CSSButton>
      <IconText>
        <Typography variant="PStyled">CSS</Typography>
      </IconText>
    </IconWrapper>
  );
};
