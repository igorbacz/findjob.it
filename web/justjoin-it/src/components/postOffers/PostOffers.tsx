import { Box, Button, List, ListItemIcon, ListItemText } from "@mui/material";
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
  Option,
} from "./styled";

export const PostOffers = () => {
  return (
    <Box>
      <HeaderPostOffers>
        <HeaderText>
          <h1>Dzięki nam dotrzesz skutecznie do społeczności ponad 400 tysięcy polskich programistów</h1>
        </HeaderText>
        <Box>
          <img src="https://justjoin.it/next-assets/addOffer/technology-header.svg" alt="ikony"></img>
        </Box>
      </HeaderPostOffers>
      <OffersBox>
        <h3>Poznaj ogłoszenia na justjoin.it</h3>
        <ContentOffers>
          <OfferBox>
            {" "}
            <OfferHeader>
              <Option>Basic</Option>
              <Price>390</Price>
              <Currency>PLN</Currency>
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
              <Option>Premium</Option>
              <Price>490</Price>
              <Currency>PLN</Currency>
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
            {" "}
            <OfferHeader>
              <Option>Business</Option>
              <Price>690</Price>
              <Currency>PLN</Currency>
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
                Kup ogłoszenie
              </Button>
            </ContentOffer>
          </OfferBox>
        </ContentOffers>
      </OffersBox>
    </Box>
  );
};
