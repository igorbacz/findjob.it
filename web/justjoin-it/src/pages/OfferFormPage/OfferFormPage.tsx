import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { Fragment } from "react";
import { OfferForm } from "../../components/offerForm/OfferForm";
import StepperForm from "../../components/offerForm/StepperForm";
import { TopBar } from "../../components/topBar/TopBar";

export const FormPageContainer = styled(Box)`
  height: 100%;
  background-color: #f3f6f8;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const OfferFormPage = () => {
  return (
    <Fragment>
      <TopBar />
      <FormPageContainer>
        <StepperForm />
        <OfferForm />
      </FormPageContainer>
    </Fragment>
  );
};
