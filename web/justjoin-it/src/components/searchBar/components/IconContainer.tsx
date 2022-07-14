import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import { Icon } from "../../../types/types";
import { IconText, IconWrapper, StyledIconButton } from "../styled";

export const IconContainer = ({ ikona, stack, background }: Icon) => {
  return (
    <IconWrapper>
      <StyledIconButton size="small" sx={{ background: background }}>
        {ikona}
      </StyledIconButton>
      <IconText>
        <Typography variant="PStyled">{stack}</Typography>
      </IconText>
    </IconWrapper>
  );
};
