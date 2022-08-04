import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

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
`;

export const TabPanel = styled(TabPanelUnstyled)`
  padding: 10px;
  background-color: #f3f6f8;
  // position: absolute;
  height: 100%;
  overflow-y: scroll; //DOESN'T WORK
`;

export const Tabs = styled(TabsUnstyled)`
  padding: 10px;
`;

export const TabsContainer = styled(Box)`
  display: flex;
  flex: 0 0 50%;
`;
