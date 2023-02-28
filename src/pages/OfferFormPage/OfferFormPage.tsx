import { Fragment } from "react";
import StepperForm from "../../components/offerForm/components/StepperForm";
import { OfferForm } from "../../components/offerForm/OfferForm";
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
