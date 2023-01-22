import styled from "@emotion/styled";
import { Box, Button, FormControlLabel, Switch } from "@mui/material";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import TabsUnstyled from "@mui/base/TabsUnstyled";

export const StyledTabs = styled(TabsUnstyled)`
  overflow-y: scroll;
`;

export const OfferWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InsideTabsBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
export const StyledSwitch = styled(Switch)`
  .MuiSwitch-switchBase {
    padding: 0px;
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  color: #777;
  font-family: Open Sans, sans-serif;
`;

export const Tab = styled(TabUnstyled)`
  color: rgb(119, 119, 119);
  gap: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  max-width: 63%;
  height: 100%;
  border: none;
  padding: 0px 30px;
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
  padding-left: 10px;
  gap: 15px;
  overflow-y: scroll;
  height: 100%;
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
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled(Button)`
  margin: 0px;
  padding: 0px;
  &:hover {
    background-color: white;
  }
  &:checked {
    background-color: white;
  }
`;
