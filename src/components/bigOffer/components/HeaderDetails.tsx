import { Typography } from "@mui/material";
import React from "react";
import * as styled from "../styled";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PeopleIcon from "@mui/icons-material/People";
import MovingIcon from "@mui/icons-material/Moving";
import TimelapseIcon from "@mui/icons-material/Timelapse";

export const HeaderDetails = ({ companyName, companySize, exp }: any) => {
  return (
    <styled.HeaderDetails>
      <styled.HeaderDetail>
        <styled.IconCon>
          <LocationCityIcon />
        </styled.IconCon>
        <styled.DataName>
          <Typography>{companyName}</Typography>
        </styled.DataName>
        <styled.DataDesc>
          <Typography variant="dataDesc">Company name</Typography>
        </styled.DataDesc>
      </styled.HeaderDetail>
      <styled.HeaderDetail>
        <styled.IconCon>
          <PeopleIcon />
        </styled.IconCon>
        <styled.DataName>
          <Typography>{companySize}+/-</Typography>
        </styled.DataName>
        <styled.DataDesc>
          <Typography variant="dataDesc">Company size</Typography>
        </styled.DataDesc>
      </styled.HeaderDetail>
      <styled.HeaderDetail>
        <styled.IconCon>
          <MovingIcon />
        </styled.IconCon>
        <styled.DataName>
          <Typography>{exp}</Typography>
        </styled.DataName>
        <styled.DataDesc>
          <Typography variant="dataDesc">EXP.lvl</Typography>
        </styled.DataDesc>
      </styled.HeaderDetail>
      <styled.HeaderDetail>
        <styled.IconCon>
          <TimelapseIcon />
        </styled.IconCon>
        <styled.DataName>
          <Typography>New</Typography>
        </styled.DataName>
        <styled.DataDesc>
          <Typography variant="dataDesc">Added</Typography>
        </styled.DataDesc>
      </styled.HeaderDetail>
    </styled.HeaderDetails>
  );
};
