import { Box, Typography, List, ListItemIcon, ListItemText, Button } from "@mui/material";
import React from "react";
import { ROUTES } from "../../../routes/routesMap";
import { StyledLink } from "../../topBar/styled";
import { ContentOffer, Currency, OfferBox, OfferHeader, Price, StyledListItem } from "../styled";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import { useSelector } from "react-redux";
import { isAuthenticatedSelector } from "../../../service/user/selectors";

export const OfferBasic = () => {
  const isAuthenticated: boolean = useSelector(isAuthenticatedSelector);

  return (
    <OfferBox>
      <OfferHeader>
        <Box>
          <Typography variant="headerFont">Basic</Typography>
        </Box>
        <Box>
          <Price>
            <Typography variant="H1Styled">390</Typography>
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
              <DoDisturbIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="No Individual Customer Care" />
          </StyledListItem>
          <StyledListItem>
            <ListItemIcon>
              <DoDisturbIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="No bump ups" />
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
