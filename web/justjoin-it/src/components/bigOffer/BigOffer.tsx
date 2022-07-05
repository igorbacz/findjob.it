import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
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
  StackDetail,
  StyledRating,
  StackName,
  StackLvl,
  BigOfferSection,
  Content,
  DescriptionMiniHeader,
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
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { FileUpload } from "./FileUpload";
import styled from "@emotion/styled";
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";

export const BigOffer = (props: BigOfferDetails) => {
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
              <Typography variant="h5">Senior FullStack JS Developer</Typography>
            </TitleBox>
            <AdressHeader>
              <LocationOnIcon />
              <Typography variant="h6">ul.Zwycięska 44 55-095 Wrocław </Typography>
            </AdressHeader>
            <Typography variant="h5">7800 PLN</Typography>
          </HeaderInfo>
        </HeaderBox>
        <HeaderDetails>
          <HeaderDetail>
            <IconCon>
              <LocationCityIcon />
            </IconCon>
            <DataName>City Bank</DataName>
            <DataDesc>Company name</DataDesc>
          </HeaderDetail>
          <HeaderDetail>
            <IconCon>
              <PeopleIcon />
            </IconCon>
            <DataName>15+</DataName>
            <DataDesc>Company size</DataDesc>
          </HeaderDetail>
          <HeaderDetail>
            <IconCon>
              <MovingIcon />
            </IconCon>
            <DataName>Senior</DataName>
            <DataDesc>EXP.lvl</DataDesc>
          </HeaderDetail>
          <HeaderDetail>
            <IconCon>
              <TimelapseIcon />
            </IconCon>
            <DataName>New</DataName>
            <DataDesc>Added</DataDesc>
          </HeaderDetail>
        </HeaderDetails>
        <StackContainer>
          <ContainerHeader>Tech Stack</ContainerHeader>
          <StackDetails>
            <StackDetail>
              <StyledRating icon={<CircleIcon fontSize="inherit" />} emptyIcon={<CircleOutlinedIcon fontSize="inherit" />} value={5} readOnly />
              <StackName>Polish</StackName>
              <StackLvl>master</StackLvl>
            </StackDetail>
            <StackDetail>
              <StyledRating icon={<CircleIcon fontSize="inherit" />} emptyIcon={<CircleOutlinedIcon fontSize="inherit" />} value={5} readOnly />
              <StackName>JavaScript</StackName>
              <StackLvl>master</StackLvl>
            </StackDetail>
            <StackDetail>
              <StyledRating icon={<CircleIcon fontSize="inherit" />} emptyIcon={<CircleOutlinedIcon fontSize="inherit" />} value={4} readOnly />
              <StackName>Node.js</StackName>
              <StackLvl>advanced</StackLvl>
            </StackDetail>
            <StackDetail>
              <StyledRating icon={<CircleIcon fontSize="inherit" />} emptyIcon={<CircleOutlinedIcon fontSize="inherit" />} value={3} readOnly />
              <StackName>English</StackName>
              <StackLvl>regular</StackLvl>
            </StackDetail>
            <StackDetail>
              <StyledRating icon={<CircleIcon fontSize="inherit" />} emptyIcon={<CircleOutlinedIcon fontSize="inherit" />} value={4} readOnly />
              <StackName>ReactJS</StackName>
              <StackLvl>advanced</StackLvl>
            </StackDetail>
          </StackDetails>
        </StackContainer>
        <BigOfferSection>
          <ContainerHeader>Description</ContainerHeader>
          <Content>
            We are looking for a FullStack JS Developer who feels excited to have a real impact on the shape and direction of the product they are
            building. We work in an agile environment, so you'll be collaborating closely with other developers, conversation designers and product
            owners. You will be responsible for delivering high-quality software, ready to be deployed frequently and safely into production.
          </Content>
          <Content>
            If youare an advocate of test automation and software craftsmanship is close to your heart, this is a place where you’ll fit right in.
          </Content>
          <DescriptionMiniHeader>Key responsibilities: </DescriptionMiniHeader>
          <List>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Active participation in defining, designing and prioritizing features" />
            </ListItem>
            <ListItem>Taking part and contributing in our team’s activities such as estimation, planning or product reviews </ListItem>
            <ListItem>Contributing to key decisions, including work prioritization and deadlines </ListItem>
            <ListItem>Developing features and enhancements with top quality in mind </ListItem>
            <ListItem>Maintenance, monitoring and scaling of our fast growing platform</ListItem>
            <ListItem> Sharing knowledge, investigating and promoting latest technologies </ListItem>
            <ListItem>Driving and influencing continuous improvement of our applications</ListItem>
          </List>
          <DescriptionMiniHeader> We are looking for someone who </DescriptionMiniHeader>
          <ul>
            <li>
              Can describe their technical skill set as:
              <ul>
                <li>Master: JavaScript </li>
                <li>Advanced: Node.js, ReactJS, TypeScript </li>
                <li>Good: MongoDB, TDD </li>
                <li>Nice to have: AWS, Microservices</li>
              </ul>
            </li>
            <li>Feels enthusiastic about quality and the importance of testing (e.g by applying TDD, BDD, CI/CD, pair programming)</li>
            <li>Is inquisitive, curious and a great problem solver </li>
            <li>Takes ownership and responsibility for the work they deliver </li>
            <li>Wants to have a real impact on the product they are building </li>
            <li>Is approachable, friendly and a team player</li> <li>Loves to learn as well as share knowledge</li>
            <li>Is a clear, concise and proactive communicator</li>
          </ul>
          <DescriptionMiniHeader> What we offer:</DescriptionMiniHeader>
          <ul>
            <li> Competitive pay with benefits: employment contract or B2B co-operation</li>
            <li>A continuous improvement environment, with 10% of your time dedicated to self-development and professional growth activities</li>
            <li>
              Exceptional conditions for growth: regular brown-bag meetings, workshops, hackathons, trainings and conferences (with a dedicated budget
              for that) Unique company culture based on mutual trust, honest feedback and autonomy
            </li>
            <li>Work in a team of highly-motivated professionals who love what they do, and enjoy each others company</li>
          </ul>
        </BigOfferSection>
        <BigOfferSection>
          <ContainerHeader>Apply</ContainerHeader>
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
