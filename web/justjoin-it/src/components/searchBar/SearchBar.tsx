import React from "react";
import { Container, ContainerSection, StyledField, ContainerRightSection } from "./styled";
import { IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { LocationMenu } from "./components/LocationMenu";
import { MoreFilters } from "./components/MoreFilters";
import { IconContainer } from "./components/IconContainer";
import { stackIcons } from "../../data";

export const SearchBar = () => {
  return (
    <Container>
      <ContainerSection>
        <StyledField
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
        {stackIcons.map((icon) => (
          <IconContainer key={icon._id} logo={icon.logo} stack={icon.stack} background={icon.background} />
        ))}
      </ContainerSection>
      <ContainerRightSection>
        <MoreFilters />
      </ContainerRightSection>
    </Container>
  );
};
