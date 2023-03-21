import { Box, Typography, List, ListItemIcon, ListItemText, Button } from "@mui/material";
import React from "react";
import { ROUTES } from "../../../routes/routesMap";
import { StyledLink } from "../../topBar/styled";
import { ContentOffer, Currency, OfferBox, OfferHeader, Price, StyledListItem } from "../styled";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import { useSelector } from "react-redux";
import { isAuthenticatedSelector } from "../../../service/user/selectors";
import { VariantOffer, variantsOfOffers } from "../variantsOfOffers";

export const OfferEmployer = ({ name, price }: VariantOffer) => {
  const isAuthenticated: boolean = useSelector(isAuthenticatedSelector);
  const currentVariant = variantsOfOffers.find((variant) => variant.name === name);
  const contentArray = currentVariant.content;
  return (
    <OfferBox>
      <OfferHeader>
        <Box>
          <Typography variant="headerFont">{name}</Typography>
        </Box>
        <Box>
          <Price>
            <Typography variant="H1Styled">{price}</Typography>
          </Price>
          <Currency>
            <Typography variant="H6Light">PLN</Typography>
          </Currency>
        </Box>
      </OfferHeader>
      <ContentOffer>
        <List>
          {contentArray.map((item) => (
            <StyledListItem>
              <ListItemIcon>{item.icon ? <CheckCircleOutlineIcon color="primary" /> : <DoDisturbIcon color="secondary" />}</ListItemIcon>
              <ListItemText primary={item.content} />
            </StyledListItem>
          ))}
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
