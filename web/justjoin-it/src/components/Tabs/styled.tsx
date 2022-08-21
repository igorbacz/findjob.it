import TabsUnstyled from "@mui/base/TabsUnstyled";
import styled from "@emotion/styled";
import { Box, FormControlLabel, Switch } from "@mui/material";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";

export const InsideTabsBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
export const StyledSwitch = styled(Switch)`
  .MuiSwitch-switchBase {
    padding: 0px;
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  color: #777;
`;

export const Tab = styled(TabUnstyled)`
  color: rgb(119, 119, 119);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  height: 100%;
  border: none;
  padding: 15px;
  border-radius: 18px 18px 0px 0px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: rgb(185, 182, 182);
  }

  &.${tabUnstyledClasses.selected} {
    background-color: rgb(243, 246, 248);
  }
`;

export const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  background-color: rgb(243, 246, 248);
  padding-top: 7px;
 padding-left:18px;
`;

export const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export const TabBar = styled(Box)`
  display: flex;
  justify-content: space-between;
`;