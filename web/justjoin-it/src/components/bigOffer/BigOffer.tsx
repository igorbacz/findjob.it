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
  StyledList,
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
import { List, ListItem, ListItemIcon, Typography } from "@mui/material";

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
            <DataName>City </DataName>
            <DataDesc>
              <Typography variant="dataDesc">Company name</Typography>
            </DataDesc>
          </HeaderDetail>
          <HeaderDetail>
            <IconCon>
              <PeopleIcon />
            </IconCon>
            <DataName>15+</DataName>
            <DataDesc>
              <Typography variant="dataDesc">Company size</Typography>
            </DataDesc>
          </HeaderDetail>
          <HeaderDetail>
            <IconCon>
              <MovingIcon />
            </IconCon>
            <DataName>Senior</DataName>
            <DataDesc>
              <Typography variant="dataDesc">EXP.lvl</Typography>
            </DataDesc>
          </HeaderDetail>
          <HeaderDetail>
            <IconCon>
              <TimelapseIcon />
            </IconCon>
            <DataName>New</DataName>
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
            <StackDetail>
              <StyledRating icon={<CircleIcon fontSize="inherit" />} emptyIcon={<CircleOutlinedIcon fontSize="inherit" />} value={5} readOnly />
              <StackName>
                <Typography variant="subtitle4">Polish</Typography>
              </StackName>
              <StackLvl>master</StackLvl>
            </StackDetail>
            <StackDetail>
              <StyledRating icon={<CircleIcon fontSize="inherit" />} emptyIcon={<CircleOutlinedIcon fontSize="inherit" />} value={5} readOnly />
              <StackName>
                <Typography variant="subtitle4">JavaScript</Typography>
              </StackName>
              <StackLvl>master</StackLvl>
            </StackDetail>
            <StackDetail>
              <StyledRating icon={<CircleIcon fontSize="inherit" />} emptyIcon={<CircleOutlinedIcon fontSize="inherit" />} value={4} readOnly />
              <StackName>
                <Typography variant="subtitle4">Node.js</Typography>
              </StackName>
              <StackLvl>advanced</StackLvl>
            </StackDetail>
            <StackDetail>
              <StyledRating icon={<CircleIcon fontSize="inherit" />} emptyIcon={<CircleOutlinedIcon fontSize="inherit" />} value={3} readOnly />
              <StackName>
                <Typography variant="subtitle4">English</Typography>
              </StackName>
              <StackLvl>regular</StackLvl>
            </StackDetail>
            <StackDetail>
              <StyledRating icon={<CircleIcon fontSize="inherit" />} emptyIcon={<CircleOutlinedIcon fontSize="inherit" />} value={4} readOnly />
              <StackName>
                <Typography variant="subtitle4">ReactJS</Typography>
              </StackName>
              <StackLvl>advanced</StackLvl>
            </StackDetail>
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
              owners. You will be responsible for delivering high-quality software, ready to be deployed frequently and safely into production.
            </Typography>
          </Content>
          <Content>
            <Typography variant="subtitle5">
              If youare an advocate of test automation and software craftsmanship is close to your heart, this is a place where you’ll fit right in.
            </Typography>
          </Content>
          <DescriptionMiniHeader>Key responsibilities: </DescriptionMiniHeader>
          <StyledList>
            <ListItem>Active participation in defining, designing and prioritizing features</ListItem>
            <ListItem>Taking part and contributing in our team’s activities such as estimation, planning or product reviews </ListItem>
            <ListItem>Contributing to key decisions, including work prioritization and deadlines </ListItem>
            <ListItem>Developing features and enhancements with top quality in mind </ListItem>
            <ListItem>Maintenance, monitoring and scaling of our fast growing platform</ListItem>
            <ListItem>Sharing knowledge, investigating and promoting latest technologies </ListItem>
            <ListItem>Driving and influencing continuous improvement of our applications</ListItem>
          </StyledList>
          <DescriptionMiniHeader> We are looking for someone who </DescriptionMiniHeader>
          <List>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon color="secondary" fontSize="small" />
              </ListItemIcon>
              Can describe their technical skill set as:
              <List>
                <ListItem>
                  <ListItemIcon>
                    <FiberManualRecordIcon color="secondary" fontSize="small" />
                  </ListItemIcon>
                  Master: JavaScript
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FiberManualRecordIcon color="secondary" fontSize="small" />
                  </ListItemIcon>
                  Advanced: Node.js, ReactJS, TypeScript
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FiberManualRecordIcon color="secondary" fontSize="small" />
                  </ListItemIcon>
                  Good: MongoDB, TDD
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FiberManualRecordIcon color="secondary" fontSize="small" />
                  </ListItemIcon>
                  Nice to have: AWS, Microservices
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon color="secondary" fontSize="small" />
              </ListItemIcon>
              Feels enthusiastic about quality and the importance of testing (e.g by applying TDD, BDD, CI/CD, pair programming)
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon color="secondary" fontSize="small" />
              </ListItemIcon>
              Is inquisitive, curious and a great problem solver
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon color="secondary" fontSize="small" />
              </ListItemIcon>
              Takes ownership and responsibility for the work they deliver
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon color="secondary" fontSize="small" />
              </ListItemIcon>
              Wants to have a real impact on the product they are building
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon color="secondary" fontSize="small" />
              </ListItemIcon>
              Is approachable, friendly and a team player
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon color="secondary" fontSize="small" />
              </ListItemIcon>
              Loves to learn as well as share knowledge
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon color="secondary" fontSize="small" />
              </ListItemIcon>
              Is a clear, concise and proactive communicator
            </ListItem>
          </List>
          <DescriptionMiniHeader> What we offer:</DescriptionMiniHeader>
          <List>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon color="secondary" fontSize="small" />
              </ListItemIcon>
              Competitive pay with benefits: employment contract or B2B co-operation
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon color="secondary" fontSize="small" />
              </ListItemIcon>
              A continuous improvement environment, with 10% of your time dedicated to self-development and professional growth activities
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon color="secondary" fontSize="small" />
              </ListItemIcon>
              Exceptional conditions for growth: regular brown-bag meetings, workshops, hackathons, trainings and conferences (with a dedicated budget
              for that) Unique company culture based on mutual trust, honest feedback and autonomy
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon color="secondary" fontSize="small" />
              </ListItemIcon>
              Work in a team of highly-motivated professionals who love what they do, and enjoy each others company
            </ListItem>
          </List>
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
