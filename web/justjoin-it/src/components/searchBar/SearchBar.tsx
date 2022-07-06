import React from "react";
import { FaAngular, FaCss3, FaGithub, FaHtml5, FaJava, FaJs, FaNodeJs, FaPhp, FaPython, FaReact, FaVuejs, FaSearch } from "react-icons/fa";
import { SiScala } from "react-icons/si";
import { BsPhone, BsThreeDots } from "react-icons/bs";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { MdAnalytics, MdOutlineSecurity } from "react-icons/md";
import {
  AnalyticsButton,
  AngularButton,
  Container,
  ContainerSection,
  CSSButton,
  DotsButton,
  GameButton,
  GHButton,
  HTMLButton,
  IconContainer,
  IconText,
  JavaButton,
  JSButton,
  MobileButton,
  NodeButton,
  PHPButton,
  PythonButton,
  ReactButton,
  ScalaButton,
  SecurityButton,
  TestingButton,
  VueButton,
  StyledField,
  ContainerRightSection,
} from "./styled";

import { IconButton, Typography } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { LocationMenu } from "./components/LocationMenu";
import { MoreFilters } from "./components/MoreFilters";

export const SearchBar = () => {
  return (
    <Container>
      <ContainerSection>
        <StyledField
          id="standard-bare"
          variant="outlined"
          size="small"
          color="secondary"
          placeholder="Search..."
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchOutlined />
              </IconButton>
            ),
          }}
        />
        <LocationMenu />
      </ContainerSection>
      <ContainerSection>
        <IconContainer>
          <CSSButton>
            <FaCss3 />
          </CSSButton>
          <IconText>
            <Typography variant="PStyled">CSS</Typography>
          </IconText>
        </IconContainer>
        <IconContainer>
          <JSButton>
            <FaJs />
          </JSButton>
          <IconText>
            <Typography variant="PStyled"> JS</Typography>
          </IconText>
        </IconContainer>
        <IconContainer>
          <HTMLButton>
            <FaHtml5 />
          </HTMLButton>
          <IconText>
            <Typography variant="PStyled"> HTML</Typography>
          </IconText>
        </IconContainer>
        <IconContainer>
          <PythonButton>
            <FaPython />
          </PythonButton>
          <IconText>
            <Typography variant="PStyled"> Python</Typography>
          </IconText>
        </IconContainer>
        <IconContainer>
          <JavaButton>
            <FaJava />
          </JavaButton>
          <IconText>
            <Typography variant="PStyled"> Java</Typography>
          </IconText>
        </IconContainer>
        <IconContainer>
          <ReactButton>
            <FaReact />
          </ReactButton>
          <IconText>
            <Typography variant="PStyled"> React</Typography>
          </IconText>
        </IconContainer>
        <IconContainer>
          <NodeButton>
            <FaNodeJs />
          </NodeButton>
          <IconText>
            <Typography variant="PStyled"> Node</Typography>
          </IconText>
        </IconContainer>
        <IconContainer>
          <VueButton>
            <FaVuejs />
          </VueButton>
          <IconText>
            <Typography variant="PStyled"> Vue</Typography>
          </IconText>
        </IconContainer>
        <IconContainer>
          <AngularButton>
            <FaAngular />
          </AngularButton>
          <IconText>
            <Typography variant="PStyled"> Angular</Typography>
          </IconText>
        </IconContainer>
        <IconContainer>
          <GHButton>
            <FaGithub />
          </GHButton>
          <IconText>
            <Typography variant="PStyled"> Github</Typography>
          </IconText>
        </IconContainer>
        <IconContainer>
          <PHPButton>
            <FaPhp />
          </PHPButton>
          <IconText>
            <Typography variant="PStyled"> PHP</Typography>
          </IconText>
        </IconContainer>
        <IconContainer>
          <ScalaButton>
            <SiScala />
          </ScalaButton>
          <IconText>
            <Typography variant="PStyled"> Scala</Typography>
          </IconText>
        </IconContainer>
        <IconContainer>
          <MobileButton>
            <BsPhone />
          </MobileButton>
          <IconText>
            <Typography variant="PStyled"> Mobile</Typography>
          </IconText>
        </IconContainer>
        <IconContainer>
          <TestingButton>
            <FaSearch />
          </TestingButton>
          <IconText>
            <Typography variant="PStyled"> Testing</Typography>
          </IconText>
        </IconContainer>
        <IconContainer>
          <GameButton>
            <TbDeviceGamepad2 />
          </GameButton>
          <IconText>
            <Typography variant="PStyled"> Game</Typography>
          </IconText>
        </IconContainer>
        <IconContainer>
          <AnalyticsButton>
            <MdAnalytics />
          </AnalyticsButton>
          <IconText>
            <Typography variant="PStyled"> Analytics</Typography>
          </IconText>
        </IconContainer>
        <IconContainer>
          <SecurityButton>
            <MdOutlineSecurity />
          </SecurityButton>
          <IconText>
            <Typography variant="PStyled"> Security</Typography>
          </IconText>
        </IconContainer>
        <IconContainer>
          <DotsButton>
            <BsThreeDots />
          </DotsButton>
          <IconText>
            <Typography variant="PStyled"> .</Typography>
          </IconText>
        </IconContainer>
      </ContainerSection>
      <ContainerRightSection>
        <MoreFilters />
      </ContainerRightSection>
    </Container>
  );
};
