import React from "react";
import {
  BigOfferWrapper,
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
} from "./styled";
import { BigOfferDetails } from "../../types/types";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PeopleIcon from "@mui/icons-material/People";
import MovingIcon from "@mui/icons-material/Moving";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import { FileUpload } from "./components/FileUpload";
import { Typography } from "@mui/material";
import Stack from "./components/Stack";
import { data } from "../../data";
import { useParams } from "react-router-dom";

export const BigOffer = ({ logo, title, adress, amount, companyName, companySize, exp, description }: BigOfferDetails) => {
  const { offerId } = useParams();
  const offer = data.find((offer) => offer._id === offerId);
  const stack = offer.techStack;

  return (
    <BigOfferWrapper>
      <BigOfferContainer>
        <HeaderBox>
          <LogoBox>
            <LogoImg alt="logo" src={logo}></LogoImg>
          </LogoBox>
          <HeaderInfo>
            <TitleBox>
              <Typography variant="headerFont">{title}</Typography>
            </TitleBox>
            <AdressHeader>
              <LocationOnIcon />
              <Typography variant="subtitle1">{adress}</Typography>
            </AdressHeader>
            {!amount && <Typography variant="subtitleLight">Undisclosed Salary</Typography>}
            {amount && <Typography variant="subtitleLight">{amount} PLN</Typography>}
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
            {stack.map((item) => {
              return <Stack {...item} />;
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
              <p>First and last name *</p>
              <StyledSmallField id="outlined-basic" label="Enter your first and last name" variant="outlined" />
            </InputContainer>
            <InputContainer>
              <p>First and last name *</p>
              <StyledSmallField id="outlined-basic" label="Enter your email adress" variant="outlined" />
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
    </BigOfferWrapper>
  );
};
