import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const PageContainer = styled(Box)`
  padding-top: 10px;
  display: flex;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  overflow: auto;
`;

export const LeftSideBox = styled(Box)`
  display: flex;
  width: 60%;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const RightSideBox = styled(Box)`
  display: flex;
  width: 50%;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  flex: 1 1 auto;
`;
