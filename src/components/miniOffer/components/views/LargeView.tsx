import { Typography } from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { useSelector } from "react-redux";
import { allOffersSelector } from "../../../../service/offers/selectors";

import { SmallOffer, BigOfferDetails } from "../../../../types/types";
import { StyledLink } from "../../../topBar/styled";
import { MiniOfferCon, LogoContainer, MiniLogoImg, Title, AmountAndTag, Paragraph, AmountResponsive, LocationRemote } from "../../styled";
import { MiniDaysTag } from "../MiniDaysTag";
import { MiniTagNew } from "../MiniTagNew";

const LargeView = ({ logo, title, amount, companyName, city, _id, remote }: SmallOffer) => {
  const offers: BigOfferDetails[] = useSelector(allOffersSelector);
  const offer = offers.find((offer) => offer._id === _id);
  const dateFrom = new Date(offer?.dateAdded);
  const dateToday = new Date();
  const difference = dateToday.getTime() - dateFrom.getTime();
  const totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  const amountRound = Number(offer?.amount) / 1000;

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
          {totalDays >= 5 && <MiniDaysTag days={totalDays} />}
          {totalDays < 5 && <MiniTagNew />}
        </AmountAndTag>
        <AmountResponsive>
          {!amount && <Typography variant="subtitle3">{amount} Undisclosed Salary</Typography>}
          {amount && <Typography variant="subtitle3">{amountRound}k PLN</Typography>}
        </AmountResponsive>
        <LocationRemote>
          {remote ? <Paragraph>{city}, Fully Remote</Paragraph> : <Paragraph>{city}</Paragraph>}
          <FmdGoodOutlinedIcon fontSize="small" color="secondary" />
        </LocationRemote>
      </MiniOfferCon>
    </StyledLink>
  );
};

export default LargeView;
