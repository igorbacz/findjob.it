import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const AllPageWrapper = styled(Box)`
  height: 100%;
`;

export const PageContainer = styled(Box)`
  padding-top: 10px;
  height: 84%;
  overflow: auto;
  display: flex;
  flex-direction: row;
`;

export const LeftSideBox = styled(Box)`
  display: flex;
  width: 50%;
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
