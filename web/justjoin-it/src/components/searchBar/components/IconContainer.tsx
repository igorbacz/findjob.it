import styled from "@emotion/styled";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import { FaCss3 } from "react-icons/fa";
import { Icon } from "../../../types/types";
import { IconText, IconWrapper } from "../styled";

export const CSSButton = styled(IconButton)`
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;

//  background: linear-gradient(-90deg, rgb(82, 102, 225), rgb(129, 102, 224)); css <FaCss3 />

export const IconContainer = ({ ikona, stack }: Icon) => {
  return (
    <IconWrapper>
      <CSSButton>{ikona}</CSSButton>
      <IconText>
        <Typography variant="PStyled">{stack}</Typography>
      </IconText>
    </IconWrapper>
  );
};
