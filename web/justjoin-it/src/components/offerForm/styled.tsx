import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const FormContainer = styled(Box)`
  background-color: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 2px 18px 10px rgb(225 232 240 / 70%);
  display: grid;
  width: 60%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 80px 200px 200px 200px 200px;
`;
