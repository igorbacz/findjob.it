import { Fragment, useEffect } from "react";
import StepperForm from "../../components/offerForm/components/StepperForm";
import { OfferForm } from "../../components/offerForm/OfferForm";
import { TopBar } from "../../components/topBar/TopBar";
import { FormPageContainer } from "./styled";

export const OfferFormPage = () => {
  const hasJWT = () => {
    let flag = false;
    localStorage.getItem("token") ? (flag = true) : (flag = false);
    return flag;
  };

  useEffect(() => {}, []);

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
