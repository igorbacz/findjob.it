import * as styled from "./styled";
import { BigOfferDetails, StackProp } from "../../types/types";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PeopleIcon from "@mui/icons-material/People";
import MovingIcon from "@mui/icons-material/Moving";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import { FileUpload } from "./components/FileUpload";
import { IconButton, Typography, useMediaQuery } from "@mui/material";
import Stack from "./components/Stack";
import { useParams } from "react-router-dom";
import { theme } from "../../theme";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { ButtonWrapper } from "../offerForm/styled";
import { useSelector } from "react-redux";
import { allOffersSelector } from "../../service/offers/selectors";

export const BigOffer = ({ logo, title, adress, amount, companyName, companySize, exp, description, remote }: BigOfferDetails) => {
  const offers: BigOfferDetails[] = useSelector(allOffersSelector);
  const { offerId } = useParams();
  const offer = offers.find((offer: BigOfferDetails) => offer._id === offerId);
  const stack = offer?.techStack;
  const isMatchMedium = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  return (
    <styled.BigOfferContainer>
      <styled.HeaderBox>
        <ButtonWrapper>
          <IconButton onClick={() => navigate(-1)} color="success">
            <ArrowBackIcon />
          </IconButton>
        </ButtonWrapper>
        {!isMatchMedium ? (
          <styled.LogoBox>
            <styled.LogoImg alt="logo" src={logo}></styled.LogoImg>
          </styled.LogoBox>
        ) : (
          <styled.LogoResponsiveBox>
            <styled.LogoImg alt="logo" src={logo}></styled.LogoImg>
          </styled.LogoResponsiveBox>
        )}
        <styled.HeaderInfo>
          <styled.TitleBox>
            <Typography variant="headerFont">{title}</Typography>
          </styled.TitleBox>
          <styled.AdressHeader>
            <PlaceOutlinedIcon />
            <Typography variant="subtitle1">{adress}</Typography>
            {!isMatchMedium ? remote && <styled.RemoteBigBox>Fully Remote</styled.RemoteBigBox> : null}
          </styled.AdressHeader>
          {!amount && <Typography variant="subtitleLight">Undisclosed Salary</Typography>}
          {amount && <Typography variant="subtitleLight">{amount} PLN</Typography>}
          {isMatchMedium ? remote && <styled.RemoteBigBox>Fully Remote</styled.RemoteBigBox> : null}
        </styled.HeaderInfo>
      </styled.HeaderBox>
      <styled.HeaderDetails>
        <styled.HeaderDetail>
          <styled.IconCon>
            <LocationCityIcon />
          </styled.IconCon>
          <styled.DataName>
            <Typography>{companyName}</Typography>
          </styled.DataName>
          <styled.DataDesc>
            <Typography variant="dataDesc">Company name</Typography>
          </styled.DataDesc>
        </styled.HeaderDetail>
        <styled.HeaderDetail>
          <styled.IconCon>
            <PeopleIcon />
          </styled.IconCon>
          <styled.DataName>
            <Typography>{companySize}+/-</Typography>
          </styled.DataName>
          <styled.DataDesc>
            <Typography variant="dataDesc">Company size</Typography>
          </styled.DataDesc>
        </styled.HeaderDetail>
        <styled.HeaderDetail>
          <styled.IconCon>
            <MovingIcon />
          </styled.IconCon>
          <styled.DataName>
            <Typography>{exp}</Typography>
          </styled.DataName>
          <styled.DataDesc>
            <Typography variant="dataDesc">EXP.lvl</Typography>
          </styled.DataDesc>
        </styled.HeaderDetail>
        <styled.HeaderDetail>
          <styled.IconCon>
            <TimelapseIcon />
          </styled.IconCon>
          <styled.DataName>
            <Typography>New</Typography>
          </styled.DataName>
          <styled.DataDesc>
            <Typography variant="dataDesc">Added</Typography>
          </styled.DataDesc>
        </styled.HeaderDetail>
      </styled.HeaderDetails>
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
      <styled.BigOfferSection>
        <styled.ContainerHeader>
          <Typography variant="subtitle2">Description</Typography>
        </styled.ContainerHeader>
        <styled.Content>
          <Typography variant="subtitle5">{description}</Typography>
        </styled.Content>
      </styled.BigOfferSection>
      <styled.BigOfferSection>
        <styled.ContainerHeader>
          <Typography variant="subtitle2">Apply</Typography>
        </styled.ContainerHeader>
        <styled.InputsContainer>
          <styled.InputContainer>
            <p>First and last name </p>
            <styled.StyledSmallField required id="outlined-basic" label="Enter your first and last name" variant="outlined" />
          </styled.InputContainer>
          <styled.InputContainer>
            <p>Email adress</p>
            <styled.StyledSmallField required id="outlined-basic" label="Enter your email adress" variant="outlined" />
          </styled.InputContainer>
        </styled.InputsContainer>
        <styled.BigInputContainer>
          <styled.InputContainer>
            <p>Introduce yourself (linkedin/github links)</p>
            <styled.StyledBigField
              id="outlined-basic"
              label="Type something about you or paste links to your linkedin, github"
              variant="outlined"
              fullWidth
            />
          </styled.InputContainer>
        </styled.BigInputContainer>
        <styled.FileContainer>
          <FileUpload />
        </styled.FileContainer>
      </styled.BigOfferSection>
    </styled.BigOfferContainer>
  );
};
