import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { allOffersSelector } from "../../../../service/offers/selectors";
import { SmallOffer, BigOfferDetails } from "../../../../types/types";
import { StyledLink } from "../../../topBar/styled";
import { MiniOfferCon, LogoContainer, MiniLogoImg, Title, AmountAndTag, DetailsSection, Paragraph, RemoteBox, TagsBox } from "../../styled";
import { MiniDaysTag } from "../MiniDaysTag";
import { MiniTag } from "../MiniTag";
import { MiniTagNew } from "../MiniTagNew";

const DefaultView = ({ logo, title, amount, companyName, city, _id, remote }: SmallOffer) => {
  const offers: BigOfferDetails[] = useSelector(allOffersSelector);
  const offer = offers.find((offer) => offer._id === _id);
  const stack = offer?.techStack;
  const dateFrom = new Date(offer?.dateAdded);
  const dateToday = new Date();
  const difference = dateToday.getTime() - dateFrom.getTime();
  const totalDays = Math.ceil(difference / (1000 * 3600 * 24));

  return (
    <StyledLink to={`/offer/${_id}`}>
      <MiniOfferCon key={_id}>
        <LogoContainer>
          <MiniLogoImg alt="logo" src={logo}></MiniLogoImg>
        </LogoContainer>
        <Title>
          <Typography variant="subtitle4">{title}</Typography>
        </Title>
        <AmountAndTag>
          {!amount && <Typography variant="subtitle3">{amount} Undisclosed Salary</Typography>}
          {amount && <Typography variant="subtitle3">{amount} PLN</Typography>}
          {totalDays >= 5 && <MiniDaysTag days={totalDays} />}
          {totalDays < 5 && <MiniTagNew />}
        </AmountAndTag>
        <DetailsSection>
          <BusinessIcon />
          <Paragraph>{companyName}</Paragraph>
          <LocationOnIcon />
          <Paragraph>{city}</Paragraph>
          {remote && (
            <RemoteBox>
              <Typography variant="RemoteTypography">Fully Remote</Typography>
            </RemoteBox>
          )}
        </DetailsSection>
        <TagsBox>
          {stack
            ?.filter((x) => x.value && x.value >= 3)
            .slice(0, 3)
            ?.map((stack) => {
              return <MiniTag stackName={stack.stackName} key={stack.stackName} />;
            })}
        </TagsBox>
      </MiniOfferCon>
    </StyledLink>
  );
};

export default DefaultView;
