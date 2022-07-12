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
  IconWrapper,
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
        <IconWrapper>
          <CSSButton>
            <FaCss3 />
          </CSSButton>
          <IconText>
            <Typography variant="PStyled">CSS</Typography>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <JSButton>
            <FaJs />
          </JSButton>
          <IconText>
            <Typography variant="PStyled"> JS</Typography>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <HTMLButton>
            <FaHtml5 />
          </HTMLButton>
          <IconText>
            <Typography variant="PStyled"> HTML</Typography>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <PythonButton>
            <FaPython />
          </PythonButton>
          <IconText>
            <Typography variant="PStyled"> Python</Typography>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <JavaButton>
            <FaJava />
          </JavaButton>
          <IconText>
            <Typography variant="PStyled"> Java</Typography>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <ReactButton>
            <FaReact />
          </ReactButton>
          <IconText>
            <Typography variant="PStyled"> React</Typography>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <NodeButton>
            <FaNodeJs />
          </NodeButton>
          <IconText>
            <Typography variant="PStyled"> Node</Typography>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <VueButton>
            <FaVuejs />
          </VueButton>
          <IconText>
            <Typography variant="PStyled"> Vue</Typography>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <AngularButton>
            <FaAngular />
          </AngularButton>
          <IconText>
            <Typography variant="PStyled"> Angular</Typography>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <GHButton>
            <FaGithub />
          </GHButton>
          <IconText>
            <Typography variant="PStyled"> Github</Typography>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <PHPButton>
            <FaPhp />
          </PHPButton>
          <IconText>
            <Typography variant="PStyled"> PHP</Typography>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <ScalaButton>
            <SiScala />
          </ScalaButton>
          <IconText>
            <Typography variant="PStyled"> Scala</Typography>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <MobileButton>
            <BsPhone />
          </MobileButton>
          <IconText>
            <Typography variant="PStyled"> Mobile</Typography>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <TestingButton>
            <FaSearch />
          </TestingButton>
          <IconText>
            <Typography variant="PStyled"> Testing</Typography>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <GameButton>
            <TbDeviceGamepad2 />
          </GameButton>
          <IconText>
            <Typography variant="PStyled"> Game</Typography>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <AnalyticsButton>
            <MdAnalytics />
          </AnalyticsButton>
          <IconText>
            <Typography variant="PStyled"> Analytics</Typography>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <SecurityButton>
            <MdOutlineSecurity />
          </SecurityButton>
          <IconText>
            <Typography variant="PStyled"> Security</Typography>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <DotsButton>
            <BsThreeDots />
          </DotsButton>
          <IconText>
            <Typography variant="PStyled"> .</Typography>
          </IconText>
        </IconWrapper>
      </ContainerSection>
      <ContainerRightSection>
        <MoreFilters />
      </ContainerRightSection>
    </Container>
  );
};
