import { Typography } from "@mui/material";
import React from "react";
import { StackProp } from "../../../types/types";
import { TagBox } from "../styled";

export const MiniTag = ({ stackName }: StackProp) => {
  return (
    <TagBox key={stackName}>
      <Typography variant="RemoteTypography">{stackName}</Typography>
    </TagBox>
  );
};
