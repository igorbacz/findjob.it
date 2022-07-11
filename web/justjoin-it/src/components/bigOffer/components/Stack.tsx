import { Typography } from "@mui/material";
import React from "react";
import { StackDetail, StyledRating, StackName, StackLvl } from "../styled";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { StackProp } from "../types";

const Stack = ({ value, stackName, stackLvl }: StackProp) => {
  return (
    <StackDetail>
      <StyledRating icon={<CircleIcon fontSize="inherit" />} emptyIcon={<CircleOutlinedIcon fontSize="inherit" />} value={value} readOnly />
      <StackName>
        <Typography variant="subtitle4">{stackName}</Typography>
      </StackName>
      <StackLvl>{stackLvl}</StackLvl>
    </StackDetail>
  );
};

export default Stack;
