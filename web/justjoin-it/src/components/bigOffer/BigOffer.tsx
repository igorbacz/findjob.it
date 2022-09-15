import {
  BigOfferContainer,
  HeaderBox,
  LogoBox,
  LogoImg,
  HeaderInfo,
  AdressHeader,
  HeaderDetails,
  HeaderDetail,
  IconCon,
  DataName,
  DataDesc,
  StackContainer,
  ContainerHeader,
  StackDetails,
  BigOfferSection,
  Content,
  InputsContainer,
  InputContainer,
  StyledSmallField,
  BigInputContainer,
  StyledBigField,
  FileContainer,
  TitleBox,
  LogoResponsiveBox,
  RemoteBigBox,
} from "./styled";
import { BigOfferDetails, StackProp } from "../../types/types";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PeopleIcon from "@mui/icons-material/People";
import MovingIcon from "@mui/icons-material/Moving";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import { FileUpload } from "./components/FileUpload";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import Stack from "./components/Stack";
import { useParams } from "react-router-dom";
import { theme } from "../../theme";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { ButtonWrapper } from "../offerForm/styled";
import { useSelector } from "react-redux";
import { allOffersSelector } from "../../services/selectors";

export const BigOffer = ({ logo, title, adress, amount, companyName, companySize, exp, description, remote }: BigOfferDetails) => {
  const offers: BigOfferDetails[] = useSelector(allOffersSelector);
  const { offerId } = useParams();
  const offer = offers.find((offer: BigOfferDetails) => offer._id === offerId);
  const stack = offer?.techStack;
  const isMatchMedium = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  return (
    <Box>
      <BigOfferContainer>
        <HeaderBox>
          <ButtonWrapper>
            <IconButton onClick={() => navigate(-1)} color="success">
              <ArrowBackIcon />
            </IconButton>
          </ButtonWrapper>
          {!isMatchMedium ? (
            <LogoBox>
              <LogoImg alt="logo" src={logo}></LogoImg>
            </LogoBox>
          ) : (
            <LogoResponsiveBox>
              <LogoImg alt="logo" src={logo}></LogoImg>
            </LogoResponsiveBox>
          )}
          <HeaderInfo>
            <TitleBox>
              <Typography variant="headerFont">{title}</Typography>
            </TitleBox>
            <AdressHeader>
              <PlaceOutlinedIcon />
              <Typography variant="subtitle1">{adress}</Typography>
              {!isMatchMedium ? remote && <RemoteBigBox>Fully Remote</RemoteBigBox> : null}
            </AdressHeader>
            {!amount && <Typography variant="subtitleLight">Undisclosed Salary</Typography>}
            {amount && <Typography variant="subtitleLight">{amount} PLN</Typography>}
            {isMatchMedium ? remote && <RemoteBigBox>Fully Remote</RemoteBigBox> : null}
          </HeaderInfo>
        </HeaderBox>
        <HeaderDetails>
          <HeaderDetail>
            <IconCon>
              <LocationCityIcon />
            </IconCon>
            <DataName>
              <Typography>{companyName}</Typography>
            </DataName>
            <DataDesc>
              <Typography variant="dataDesc">Company name</Typography>
            </DataDesc>
          </HeaderDetail>
          <HeaderDetail>
            <IconCon>
              <PeopleIcon />
            </IconCon>
            <DataName>
              <Typography>{companySize}+/-</Typography>
            </DataName>
            <DataDesc>
              <Typography variant="dataDesc">Company size</Typography>
            </DataDesc>
          </HeaderDetail>
          <HeaderDetail>
            <IconCon>
              <MovingIcon />
            </IconCon>
            <DataName>
              <Typography>{exp}</Typography>
            </DataName>
            <DataDesc>
              <Typography variant="dataDesc">EXP.lvl</Typography>
            </DataDesc>
          </HeaderDetail>
          <HeaderDetail>
            <IconCon>
              <TimelapseIcon />
            </IconCon>
            <DataName>
              <Typography>New</Typography>
            </DataName>
            <DataDesc>
              <Typography variant="dataDesc">Added</Typography>
            </DataDesc>
          </HeaderDetail>
        </HeaderDetails>
        <StackContainer>
          <ContainerHeader>
            <Typography variant="subtitle2">Tech Stack</Typography>
          </ContainerHeader>
          <StackDetails>
            {stack?.map((item: StackProp) => {
              return <Stack {...item} key={item.stackName} />;
            })}
          </StackDetails>
        </StackContainer>
        <BigOfferSection>
          <ContainerHeader>
            <Typography variant="subtitle2">Description</Typography>
          </ContainerHeader>
          <Content>
            <Typography variant="subtitle5">{description}</Typography>
          </Content>
        </BigOfferSection>
        <BigOfferSection>
          <ContainerHeader>
            <Typography variant="subtitle2">Apply</Typography>
          </ContainerHeader>
          <InputsContainer>
            <InputContainer>
              <p>First and last name </p>
              <StyledSmallField required id="outlined-basic" label="Enter your first and last name" variant="outlined" />
            </InputContainer>
            <InputContainer>
              <p>Email adress</p>
              <StyledSmallField required id="outlined-basic" label="Enter your email adress" variant="outlined" />
            </InputContainer>
          </InputsContainer>
          <BigInputContainer>
            <InputContainer>
              <p>Introduce yourself (linkedin/github links)</p>
              <StyledBigField
                id="outlined-basic"
                label="Type something about you or paste links to your linkedin, github"
                variant="outlined"
                fullWidth
              />
            </InputContainer>
          </BigInputContainer>
          <FileContainer>
            <FileUpload />
          </FileContainer>
        </BigOfferSection>
      </BigOfferContainer>
    </Box>
  );
};
