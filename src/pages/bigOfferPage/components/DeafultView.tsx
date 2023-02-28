import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BigOffer } from "../../../components/bigOffer/BigOffer";
import { allOffersSelector } from "../../../service/offers/selectors";
import { BigOfferDetails } from "../../../types/types";
import { AllPageWrapper, PageContainer, LeftSideBox, RightSideBox } from "../styled";
import { OpenStreetMap } from "../../../components/OpenStreetMap/OpenStreetMap";
import { SearchBar } from "../../../components/searchBar/SearchBar";
import { TopBar } from "../../../components/topBar/TopBar";

export const DefaultView = () => {
  const offers: BigOfferDetails[] = useSelector(allOffersSelector);
  const { offerId } = useParams();
  const offer = offers.find((offer) => offer._id === offerId);

  return offer ? (
    <AllPageWrapper>
      <>
        <TopBar />
        <SearchBar />
      </>
      <PageContainer>
        <LeftSideBox>
          <BigOffer {...offer} />
        </LeftSideBox>
        <RightSideBox>
          <OpenStreetMap />
        </RightSideBox>
      </PageContainer>
    </AllPageWrapper>
  ) : (
    <AllPageWrapper>
      <>
        <TopBar />
        <SearchBar />
      </>
      <PageContainer>
        <LeftSideBox>Offer not found</LeftSideBox>
        <RightSideBox>
          <OpenStreetMap />
        </RightSideBox>
      </PageContainer>
    </AllPageWrapper>
  );
};
