import { Box, Button, List, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import {
  HeaderPostOffers,
  HeaderText,
  OffersBox,
  ContentOffers,
  OfferBox,
  OfferHeader,
  Price,
  Currency,
  ContentOffer,
  StyledListItem,
} from "./styled";
import styled from "@emotion/styled";

export const Boxo = styled(Box)`
  max-width: 58.333333%;
  flex-basis: 58.333333%;
`;

export const PostOffers = () => {
  return (
    <Box>
      <HeaderPostOffers>
        <HeaderText>
          <Typography variant="H2Styled">Dzięki nam dotrzesz skutecznie do społeczności ponad 400 tysięcy polskich programistów</Typography>
        </HeaderText>
        <Boxo>
          <img src="https://justjoin.it/next-assets/addOffer/technology-header.svg" alt="ikony"></img>
        </Boxo>
      </HeaderPostOffers>
      <OffersBox>
        <Typography variant="H3Styled">Poznaj ogłoszenia na justjoin.it</Typography>
        <ContentOffers>
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
                  <ListItemText primary="Ogłoszenie na 30 dni" />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Ogłoszenie w prasówce technologicznej" />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <DoDisturbIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Brak Customer Care" />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <DoDisturbIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Bez odświeżeń" />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <DoDisturbIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Brak promocji w Social Media" />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <DoDisturbIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Brak indywidualnego copy" />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <DoDisturbIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Brak Social Boost - płatna kampania marketingowa w social media na budżecie klienta" />
                </StyledListItem>
              </List>
              <Button variant="contained" size="large">
                Kup ogłoszenie
              </Button>
            </ContentOffer>
          </OfferBox>
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
                  <ListItemText primary="Ogłoszenie na 30 dni" />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Ogłoszenie w prasówce technologicznej" />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Deykowany Opiekun Customer Care" />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="1 automatyczne odświeżenie" />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <DoDisturbIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Brak promocji w Social Media" />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <DoDisturbIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Brak indywidualnego copy" />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <DoDisturbIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Brak Social Boost - płatna kampania marketingowa w social media na budżecie klienta" />
                </StyledListItem>
              </List>
              <Button variant="contained" size="large">
                Kup ogłoszenie
              </Button>
            </ContentOffer>
          </OfferBox>
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
                  <ListItemText primary="Ogłoszenie na 30 dni" />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Ogłoszenie w prasówce technologicznej" />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Deykowany Opiekun Customer Care" />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="1 automatyczne odświeżenie" />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Indywidualna promocja w Social Media" />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Inywidualne copy ogłoszenia + audyt" />
                </StyledListItem>
                <StyledListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Możliwy Social Boost - płatna kampania marketingowa w social media na budżecie klienta" />
                </StyledListItem>
              </List>
              <Button variant="contained" size="large">
                <Typography variant="buttonFont">Kup ogłoszenie</Typography>
              </Button>
            </ContentOffer>
          </OfferBox>
        </ContentOffers>
      </OffersBox>
    </Box>
  );
};
