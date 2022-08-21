import { Paragraph, Title, DetailsSection, LogoContainer, MiniOfferCon, AmountBox, MiniLogoImg, RemoteBox, TagsBox, TagBox } from "./styled";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";
import { SmallOffer } from "../../types/types";
import { StyledLink } from "../topBar/styled";
import { data } from "../../data";
import { MiniTag } from "./components/MiniTag";

const MiniOffer = ({ logo, title, amount, companyName, city, _id, remote, techStack }: SmallOffer) => {
  const offer = data.find((offer) => offer._id === _id);
  const stack = offer?.techStack;

  return (
    <StyledLink to={`/offer/${_id}`}>
      <MiniOfferCon>
        <LogoContainer>
          <MiniLogoImg alt="logo" src={logo}></MiniLogoImg>
        </LogoContainer>
        <Title>
          <Typography variant="subtitle4">{title}</Typography>
        </Title>
        <AmountBox>
          {!amount && <Typography variant="subtitle3">{amount} Undisclosed Salary</Typography>}
          {amount && <Typography variant="subtitle3">{amount} PLN</Typography>}
        </AmountBox>
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
              return <MiniTag stackName={stack.stackName} />;
            })}
        </TagsBox>
      </MiniOfferCon>
    </StyledLink>
  );
};

export default MiniOffer;
