import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import styled from "@emotion/styled";
import { Box, FormControlLabel, Switch } from "@mui/material";

export const Tab = styled(TabUnstyled)`
  background-color: rgb(255, 255, 255);
  height: 40px;
  border-radius: 20px 20px 0px 0px;
  border: none;
  padding: 0px 20px;
  font-size: 14px;
  font-weight: 400;
  color: #99a1ab;
  &:focus {
    background: #f3f6f8;
  }
  &:hover {
    background: rgb(149, 149, 149);
    color: white;
  }
  &:selected {
    background: #f3f6f8;
  }
`;

export const TabsList = styled(TabsListUnstyled)`
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
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

export const TabPanel = styled(TabPanelUnstyled)`
  padding: 10px;
  background-color: #f3f6f8;
`;

export const Tabs = styled(TabsUnstyled)`
  padding: 10px;
`;

export const TabsContainer = styled(Box)`
  height: 100%;
  overflow-y: scroll;
`;
