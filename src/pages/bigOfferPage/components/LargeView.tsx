import { useMediaQuery } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BigOffer } from "../../../components/bigOffer/BigOffer";
import { TopBarResponsive } from "../../../components/topBar/TopBarResponsive";
import { allOffersSelector } from "../../../service/offers/selectors";
import { theme } from "../../../theme";
import { BigOfferDetails } from "../../../types/types";
import { AllPageWrapper, PageContainer, LeftSideBox } from "../styled";

export const LargeView = () => {
  const offers: BigOfferDetails[] = useSelector(allOffersSelector);
  const { offerId } = useParams();
  const offer = offers.find((offer) => offer._id === offerId);

  return offer ? (
    <AllPageWrapper>
      <TopBarResponsive />
      <PageContainer>
        <LeftSideBox>
          <BigOffer {...offer} />
        </LeftSideBox>
      </PageContainer>
    </AllPageWrapper>
  ) : (
    <AllPageWrapper>
      <TopBarResponsive />
      <PageContainer>
        <LeftSideBox>Offer not found</LeftSideBox>
      </PageContainer>
    </AllPageWrapper>
  );
};
