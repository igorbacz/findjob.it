import * as styled from "./styled";
import { BigOfferDetails, StackProp } from "../../types/types";
import { Typography } from "@mui/material";
import Stack from "./components/Stack";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { allOffersSelector } from "../../service/offers/selectors";
import { RecruitForm } from "./components/RecruitForm";
import { HeaderBox } from "./components/HeaderBox";
import { HeaderDetails } from "./components/HeaderDetails";
import { Description } from "./components/Description";

export const BigOffer = ({}: BigOfferDetails) => {
  const offers: BigOfferDetails[] = useSelector(allOffersSelector);
  const { offerId } = useParams();
  const offer = offers.find((offer: BigOfferDetails) => offer._id === offerId);
  const stack = offer?.techStack;

  return (
    <styled.BigOfferContainer>
      <HeaderBox {...offer} />
      <HeaderDetails {...offer} />
      <styled.StackContainer>
        <styled.ContainerHeader>
          <Typography variant="subtitle2">Tech Stack</Typography>
        </styled.ContainerHeader>
        <styled.StackDetails>
          {stack?.map((item: StackProp) => {
            return <Stack {...item} key={item.stackName} />;
          })}
        </styled.StackDetails>
      </styled.StackContainer>
      <Description {...offer} />
      <RecruitForm />
    </styled.BigOfferContainer>
  );
};
