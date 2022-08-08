import { Paragraph, Title, DetailsSection, LogoContainer, MiniOfferCon, AmountBox, MiniLogoImg, RemoteBox, TagsBox, TagBox } from "./styled";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, Typography } from "@mui/material";
import { SmallOffer } from "../../types/types";
import { StyledLink } from "../topBar/styled";
import { OfferBox } from "../postOffers/styled";
import { data } from "../../data";
import { MiniTag } from "./components/MiniTag";
import { StackName } from "../bigOffer/styled";
import { useParams } from "react-router-dom";

const MiniOffer = ({ logo, title, amount, companyName, city, _id, remote, techStack }: SmallOffer) => {
  const { offerId } = useParams();
  const offer = data.find((offer) => offer._id === offerId);
  const stack = offer?.techStack;
  debugger;
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
          {/* {stack?.map((stack) => {
            debugger;
            //TODO po czym mapowanie
            return <MiniTag stackName={stack.stackName} />;
          })} */}
          <MiniTag stackName={"sql"} />
          <MiniTag stackName={"react"} />
          <MiniTag stackName={"security"} />
        </TagsBox>
      </MiniOfferCon>
    </StyledLink>
  );
};

export default MiniOffer;
