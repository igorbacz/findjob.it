import { Container, ContainerSection, StyledField, ContainerRightSection, IconText, IconWrapper, AllBox } from "./styled";
import { IconButton, Typography } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { LocationMenu } from "./components/LocationMenu";
import { MoreFilters } from "./components/moreFilters/MoreFilters";
import { IconContainer } from "./components/iconContainer/IconContainer";
import { stackIcons } from "../../data";
import { useSearchParams } from "react-router-dom";

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get("techStack");

  const allSearch = () => {
    searchParams.delete("techStack");
    setSearchParams(searchParams);
  };

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
        <IconWrapper>
          <AllBox
            onClick={allSearch}
            sx={{
              background: !param
                ? "linear-gradient(-90deg, rgb(186, 104, 200), rgb(156, 39, 176))"
                : "linear-gradient(-90deg, rgb(145, 147, 170), rgb(125, 130, 168)) ",
            }}
          >
            All
          </AllBox>
          <IconText>
            <Typography variant="PStyled">All</Typography>
          </IconText>
        </IconWrapper>
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
