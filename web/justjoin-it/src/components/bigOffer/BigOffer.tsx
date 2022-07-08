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
import { BigOfferDetails } from "./types";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PeopleIcon from "@mui/icons-material/People";
import MovingIcon from "@mui/icons-material/Moving";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import { FileUpload } from "./components/FileUpload";
import { Typography } from "@mui/material";
import Stack from "./components/Stack";

export const BigOffer = (props: BigOfferDetails) => {
  const stack = [{ stackName: "Polish", stackLvl: "master", value: 5 }];

  return (
    <BigOfferWrapper>
      <BigOfferContainer>
        <HeaderBox>
          <LogoBox>
            <LogoImg
              alt="logo"
              src="https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465"
            ></LogoImg>
          </LogoBox>
          <HeaderInfo>
            <TitleBox>
              <Typography variant="headerFont">Senior FullStack JS Developer</Typography>
            </TitleBox>
            <AdressHeader>
              <LocationOnIcon />
              <Typography variant="subtitle1">ul.Zwycięska 44 55-095 Wrocław </Typography>
            </AdressHeader>
            <Typography variant="subtitleLight">7800 PLN</Typography>
          </HeaderInfo>
        </HeaderBox>
        <HeaderDetails>
          <HeaderDetail>
            <IconCon>
              <LocationCityIcon />
            </IconCon>
            <DataName>
              <Typography>City </Typography>
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
              <Typography>15+</Typography>
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
              <Typography>Senior</Typography>
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
            <Stack stackName={stack[0].stackName} stackLvl={stack[0].stackLvl} value={stack[0].value} />
            <Stack stackName={stack[0].stackName} stackLvl={stack[0].stackLvl} value={stack[0].value} />
            <Stack stackName={stack[0].stackName} stackLvl={stack[0].stackLvl} value={stack[0].value} />
            <Stack stackName={stack[0].stackName} stackLvl={stack[0].stackLvl} value={stack[0].value} />
            <Stack stackName={stack[0].stackName} stackLvl={stack[0].stackLvl} value={stack[0].value} />
          </StackDetails>
        </StackContainer>
        <BigOfferSection>
          <ContainerHeader>
            <Typography variant="subtitle2">Description</Typography>
          </ContainerHeader>
          <Content>
            <Typography variant="subtitle5">
              We are looking for a FullStack JS Developer who feels excited to have a real impact on the shape and direction of the product they are
              building. We work in an agile environment, so you'll be collaborating closely with other developers, conversation designers and product
              owners. You will be responsible for delivering high-quality software, ready to be deployed frequently and safely into production. If
              youare an advocate of test automation and software craftsmanship is close to your heart, this is a place where you’ll fit right in.
            </Typography>
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
