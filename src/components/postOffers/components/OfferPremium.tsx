import { Box, Typography, List, ListItemIcon, ListItemText, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { ROUTES } from "../../../routes/routesMap";
import { isAuthenticatedSelector } from "../../../service/user/selectors";
import { StyledLink } from "../../topBar/styled";
import { OfferBox, OfferHeader, Price, Currency, ContentOffer, StyledListItem } from "../styled";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";

export const OfferPremium = () => {
  const isAuthenticated: boolean = useSelector(isAuthenticatedSelector);
  return (
    <OfferBox>
      <OfferHeader>
        <Box>
          <Typography variant="headerFont">Premium</Typography>
        </Box>
        <Box>
          <Price>
            <Typography variant="H1Styled">490</Typography>
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
            <ListItemText
              primary="
1 automatic bump-up"
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemIcon>
              <DoDisturbIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="No promotion in Social Media" />
          </StyledListItem>
          <StyledListItem>
            <ListItemIcon>
              <DoDisturbIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="No individual copy" />
          </StyledListItem>
          <StyledListItem>
            <ListItemIcon>
              <DoDisturbIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="No Social boost - paid job ads promotion in social media with budget provided by the client" />
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
