import { Paragraph, Title, DetailsSection, LogoContainer, MiniOfferCon, AmountAndTag, MiniLogoImg, RemoteBox, TagsBox, TagBox } from "./styled";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography, useMediaQuery } from "@mui/material";
import { SmallOffer } from "../../types/types";
import { StyledLink } from "../topBar/styled";
import { data } from "../../data";
import { MiniTag } from "./components/MiniTag";
import { MiniDaysTag } from "./components/MiniDaysTag";
import { theme } from "../../theme";

const MiniOffer = ({ logo, title, amount, companyName, city, _id, remote }: SmallOffer) => {
  const offer = data.find((offer) => offer._id === _id);
  const stack = offer?.techStack;
  const dateFrom = new Date(offer.dateAdded);
  const dateToday = new Date();
  const difference = dateToday.getTime() - dateFrom.getTime();
  const totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledLink to={`/offer/${_id}`}>
      <MiniOfferCon>
        <LogoContainer>
          <MiniLogoImg alt="logo" src={logo}></MiniLogoImg>
        </LogoContainer>
        <Title>
          <Typography variant="subtitle4">{title}</Typography>
        </Title>
        <AmountAndTag>
          {!amount && <Typography variant="subtitle3">{amount} Undisclosed Salary</Typography>}
          {amount && <Typography variant="subtitle3">{amount} PLN</Typography>}
          <MiniDaysTag days={totalDays} />
        </AmountAndTag>
        {!isMatch ? (
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
        ) : null}

        <TagsBox>
          {stack
            ?.filter((x) => x.value && x.value >= 3)
            .slice(0, 3)
            ?.map((stack) => {
              return <MiniTag stackName={stack.stackName} />;
            })}
        </TagsBox>
      </MiniOfferCon>
    </StyledLink>
  );
};

export default MiniOffer;
