import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import { OfferForm } from "../../components/offerForm/OfferForm";
import StepperForm from "../../components/offerForm/StepperForm";
import { TopBar } from "../../components/topBar/TopBar";

export const FormPageContainer = styled(Box)`

  height: 100%;
`;

export const OfferFormPage = () => {
  return (
    <FormPageContainer>
      <TopBar />
      <StepperForm />
      <OfferForm />
    </FormPageContainer>
  );
};
