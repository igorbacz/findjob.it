import React from "react";
import { FaAngular, FaCss3, FaGithub, FaHtml5, FaJava, FaJs, FaNodeJs, FaPhp, FaPython, FaReact, FaVuejs } from "react-icons/fa";
import { SiScala } from "react-icons/si";
import { BsPhone } from "react-icons/bs";
import {
  AngularButton,
  Container,
  ContainerSection,
  CSSButton,
  GHButton,
  HTMLButton,
  IconContainer,
  IconText,
  JavaButton,
  JSButton,
  NodeButton,
  PythonButton,
  ReactButton,
  VueButton,
} from "./styled";

import { IconButton, TextField, ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import { SearchOutlined } from "@mui/icons-material";
import { LocationMenu } from "./LocationMenu";
import styled from "@emotion/styled";

export const PHPButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(65, 173, 250), rgb(21, 124, 252));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;
export const ScalaButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(248, 100, 104), rgb(241, 70, 76));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;

export const MobileButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(224, 79, 134), rgb(186, 74, 141));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;

export const SearchBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ContainerSection>
          <TextField
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
        </ContainerSection>
      </Container>
    </ThemeProvider>
  );
};
