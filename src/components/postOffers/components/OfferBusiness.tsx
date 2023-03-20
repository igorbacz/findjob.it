import React from "react";
import { Box, Typography, List, ListItemIcon, ListItemText, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { ROUTES } from "../../../routes/routesMap";
import { isAuthenticatedSelector } from "../../../service/user/selectors";
import { StyledLink } from "../../topBar/styled";
import { OfferBox, OfferHeader, Price, Currency, ContentOffer, StyledListItem } from "../styled";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const OfferBusiness = () => {
  const isAuthenticated: boolean = useSelector(isAuthenticatedSelector);

  return (
    <OfferBox>
      <OfferHeader>
        <Box>
          <Typography variant="headerFont">Business</Typography>
        </Box>
        <Box>
          <Price>
            <Typography variant="H1Styled">690</Typography>
          </Price>
          <Currency>
            <Typography variant="H6Light">PLN</Typography>
          </Currency>
        </Box>
      </OfferHeader>
      <ContentOffer>
        <List>
          <StyledListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Offer for 30 days" />
          </StyledListItem>
          <StyledListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Job ad in technological summaries" />
          </StyledListItem>
          <StyledListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Invividual Customer Care" />
          </StyledListItem>
          <StyledListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="2 automatic bump-up" />
          </StyledListItem>
          <StyledListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Individual promotion in Social Media" />
          </StyledListItem>
          <StyledListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Individual job ad copy + audit" />
          </StyledListItem>
          <StyledListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Optional Social boost - - paid job ads promotion in social media with budget provided by the client" />
          </StyledListItem>
        </List>
        {!isAuthenticated ? (
          <>
            <StyledLink to={ROUTES.addOffer}>
              <Button variant="contained" size="large" disabled>
                Post a job
              </Button>
            </StyledLink>
            <StyledLink to={ROUTES.login}>
              <Typography variant="PStyled">Log in to add the job offer</Typography>
            </StyledLink>
          </>
        ) : (
          <StyledLink to={ROUTES.addOffer}>
            <Button variant="contained" size="large">
              Post a job
            </Button>
          </StyledLink>
        )}
      </ContentOffer>
    </OfferBox>
  );
};
