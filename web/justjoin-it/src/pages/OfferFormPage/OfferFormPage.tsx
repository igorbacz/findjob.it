import { Fragment } from "react";
import { OfferForm } from "../../components/offerForm/OfferForm";
import StepperForm from "../../components/offerForm/StepperForm";
import { TopBar } from "../../components/topBar/TopBar";
import { FormPageContainer } from "./styled";

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
