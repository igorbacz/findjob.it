import {
  Paragraph,
  Title,
  DetailsSection,
  LogoContainer,
  MiniOfferCon,
  AmountAndTag,
  MiniLogoImg,
  RemoteBox,
  TagsBox,
  TagBox,
  AmountResponsive,
  LocationRemote,
} from "./styled";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography, useMediaQuery } from "@mui/material";
import { SmallOffer } from "../../types/types";
import { StyledLink } from "../topBar/styled";
import { data } from "../../data";
import { MiniTag } from "./components/MiniTag";
import { MiniDaysTag } from "./components/MiniDaysTag";
import { theme } from "../../theme";
import { MiniTagNew } from "./components/MiniTagNew";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const MiniOffer = ({ logo, title, amount, companyName, city, _id, remote }: SmallOffer) => {
  const offer = data.find((offer) => offer._id === _id);
  const stack = offer?.techStack;
  const dateFrom = new Date(offer.dateAdded);
  const dateToday = new Date();
  const difference = dateToday.getTime() - dateFrom.getTime();
  const totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  const amountRound = offer.amount / 1000;
  const isMatchLarge = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <StyledLink to={`/offer/${_id}`}>
      <MiniOfferCon key={_id}>
        <LogoContainer>
          <MiniLogoImg alt="logo" src={logo}></MiniLogoImg>
        </LogoContainer>
        <Title>
          <Typography variant="subtitle4">{title}</Typography>
        </Title>
        {!isMatchLarge ? (
          <AmountAndTag>
            {!amount && <Typography variant="subtitle3">{amount} Undisclosed Salary</Typography>}
            {amount && <Typography variant="subtitle3">{amount} PLN</Typography>}
            {totalDays >= 5 && <MiniDaysTag days={totalDays} />}
            {totalDays < 5 && <MiniTagNew />}
          </AmountAndTag>
        ) : (
          <AmountAndTag>
            {totalDays >= 5 && <MiniDaysTag days={totalDays} />}
            {totalDays < 5 && <MiniTagNew />}
          </AmountAndTag>
        )}

        {!isMatchLarge ? (
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
        ) : (
          <AmountResponsive>
            {!amount && <Typography variant="subtitle3">{amount} Undisclosed Salary</Typography>}
            {amount && <Typography variant="subtitle3">{amountRound}k PLN</Typography>}
          </AmountResponsive>
        )}
        {!isMatchLarge ? (
          <TagsBox>
            {stack
              ?.filter((x) => x.value && x.value >= 3)
              .slice(0, 3)
              ?.map((stack) => {
                return <MiniTag stackName={stack.stackName} />;
              })}
          </TagsBox>
        ) : (
          <LocationRemote>
            {remote ? <Paragraph>{city}, Fully Remote</Paragraph> : <Paragraph>{city}</Paragraph>}
            <FmdGoodOutlinedIcon fontSize="small" color="secondary" />
          </LocationRemote>
        )}
      </MiniOfferCon>
    </StyledLink>
  );
};

export default MiniOffer;
