import Button from "@mui/material/Button";
import React from "react";
import { FaAngular, FaCss3, FaGithub, FaHtml5, FaJava, FaJs, FaNodeJs, FaPython, FaReact, FaVuejs } from "react-icons/fa";
import { Container, ContainerSection, IconContainer, IconText, Input } from "./styled";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";

export const SearchBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ContainerSection>
          <Input placeholder="Search..."></Input>
          <Button color="secondary" variant="outlined">
            Location
          </Button>
        </ContainerSection>
        <ContainerSection>
          <IconContainer>
            <a>
              <FaCss3 />
            </a>
            <IconText> CSS</IconText>
          </IconContainer>
          <IconContainer>
            <a>
              <FaJs />
            </a>
            <IconText> JS</IconText>
          </IconContainer>
          <IconContainer>
            <a>
              <FaHtml5 />
            </a>
            <IconText> HTML</IconText>
          </IconContainer>
          <IconContainer>
            <a>
              <FaPython />
            </a>
            <IconText> Python</IconText>
          </IconContainer>
          <IconContainer>
            <a>
              <FaJava />
            </a>
            <IconText> Java</IconText>
          </IconContainer>
          <IconContainer>
            <a>
              <FaReact />
            </a>
            <IconText> React</IconText>
          </IconContainer>
          <IconContainer>
            <a>
              <FaNodeJs />
            </a>
            <IconText> Node</IconText>
          </IconContainer>
          <IconContainer>
            <a>
              <FaVuejs />
            </a>
            <IconText> Vue</IconText>
          </IconContainer>
          <IconContainer>
            <a>
              <FaAngular />
            </a>
            <IconText> Angular</IconText>
          </IconContainer>
          <IconContainer>
            <a>
              <FaGithub />
            </a>
            <IconText> Github</IconText>
          </IconContainer>
        </ContainerSection>
      </Container>
    </ThemeProvider>
  );
};
