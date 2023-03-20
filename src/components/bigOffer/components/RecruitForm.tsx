import { Typography } from "@mui/material";
import React from "react";
import * as styled from "../styled";
import { FileUpload } from "./FileUpload";

export const RecruitForm = () => {
  return (
    <styled.BigOfferSection>
      <styled.ContainerHeader>
        <Typography variant="subtitle2">Apply</Typography>
      </styled.ContainerHeader>
      <styled.InputsContainer>
        <styled.InputContainer>
          <p>First and last name </p>
          <styled.StyledSmallField required id="outlined-basic" label="Enter your first and last name" variant="outlined" />
        </styled.InputContainer>
        <styled.InputContainer>
          <p>Email adress</p>
          <styled.StyledSmallField required id="outlined-basic" label="Enter your email adress" variant="outlined" />
        </styled.InputContainer>
      </styled.InputsContainer>
      <styled.BigInputContainer>
        <styled.InputContainer>
          <p>Introduce yourself (linkedin/github links)</p>
          <styled.StyledBigField
            id="outlined-basic"
            label="Type something about you or paste links to your linkedin, github"
            variant="outlined"
            fullWidth
          />
        </styled.InputContainer>
      </styled.BigInputContainer>
      <styled.FileContainer>
        <FileUpload />
      </styled.FileContainer>
    </styled.BigOfferSection>
  );
};
