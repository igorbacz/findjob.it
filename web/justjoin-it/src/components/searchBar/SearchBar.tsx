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

import { IconButton, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { LocationMenu } from "./components/LocationMenu";
import styled from "@emotion/styled";
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
          <IconText> CSS</IconText>
        </IconContainer>
        <IconContainer>
          <JSButton>
            <FaJs />
          </JSButton>
          <IconText> JS</IconText>
        </IconContainer>
        <IconContainer>
          <HTMLButton>
            <FaHtml5 />
          </HTMLButton>
          <IconText> HTML</IconText>
        </IconContainer>
        <IconContainer>
          <PythonButton>
            <FaPython />
          </PythonButton>
          <IconText> Python</IconText>
        </IconContainer>
        <IconContainer>
          <JavaButton>
            <FaJava />
          </JavaButton>
          <IconText> Java</IconText>
        </IconContainer>
        <IconContainer>
          <ReactButton>
            <FaReact />
          </ReactButton>
          <IconText> React</IconText>
        </IconContainer>
        <IconContainer>
          <NodeButton>
            <FaNodeJs />
          </NodeButton>
          <IconText> Node</IconText>
        </IconContainer>
        <IconContainer>
          <VueButton>
            <FaVuejs />
          </VueButton>
          <IconText> Vue</IconText>
        </IconContainer>
        <IconContainer>
          <AngularButton>
            <FaAngular />
          </AngularButton>
          <IconText> Angular</IconText>
        </IconContainer>
        <IconContainer>
          <GHButton>
            <FaGithub />
          </GHButton>
          <IconText> Github</IconText>
        </IconContainer>
        <IconContainer>
          <PHPButton>
            <FaPhp />
          </PHPButton>
          <IconText> PHP</IconText>
        </IconContainer>
        <IconContainer>
          <ScalaButton>
            <SiScala />
          </ScalaButton>
          <IconText> Scala</IconText>
        </IconContainer>
        <IconContainer>
          <MobileButton>
            <BsPhone />
          </MobileButton>
          <IconText> Mobile</IconText>
        </IconContainer>
        <IconContainer>
          <TestingButton>
            <FaSearch />
          </TestingButton>
          <IconText> Testing</IconText>
        </IconContainer>
        <IconContainer>
          <GameButton>
            <TbDeviceGamepad2 />
          </GameButton>
          <IconText> Game</IconText>
        </IconContainer>
        <IconContainer>
          <AnalyticsButton>
            <MdAnalytics />
          </AnalyticsButton>
          <IconText> Analytics</IconText>
        </IconContainer>
        <IconContainer>
          <SecurityButton>
            <MdOutlineSecurity />
          </SecurityButton>
          <IconText> Security</IconText>
        </IconContainer>
        <IconContainer>
          <DotsButton>
            <BsThreeDots />
          </DotsButton>
          <IconText> .</IconText>
        </IconContainer>
      </ContainerSection>
      <ContainerRightSection>
        <MoreFilters />
      </ContainerRightSection>
    </Container>
  );
};
