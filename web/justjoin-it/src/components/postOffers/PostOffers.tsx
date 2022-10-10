import { Box, Button, List, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Fragment } from "react";
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
  ImgBox,
} from "./styled";
import { StyledLink } from "../topBar/styled";

export const PostOffers = () => {
  const userToken = localStorage.getItem("token");
  return (
    <Fragment>
      <HeaderPostOffers>
        <HeaderText>
          <Typography variant="H2Styled">Dzięki nam dotrzesz skutecznie do społeczności ponad 400 tysięcy polskich programistów</Typography>
        </HeaderText>
        <ImgBox sx={{ display: { xs: "none", md: "none", lg: "block", xl: "block" } }}>
          <img src="https://justjoin.it/next-assets/addOffer/technology-header.svg" alt="ikony"></img>
        </ImgBox>
      </HeaderPostOffers>
      <OffersBox>
        <Typography variant="H3Styled">Poznaj ogłoszenia na findjob.it</Typography>
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
              {!userToken ? (
                <>
                  <Button variant="contained" size="large" href="/add-offer" disabled>
                    Kup ogłoszenie
                  </Button>
                  <StyledLink to="/login">
                    <Typography variant="PStyled">Zaloguj się aby dodać ogłoszenie </Typography>
                  </StyledLink>
                </>
              ) : (
                <Button variant="contained" size="large" href="/add-offer">
                  Kup ogłoszenie
                </Button>
              )}
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
              {!userToken ? (
                <>
                  <Button variant="contained" size="large" href="/add-offer" disabled>
                    Kup ogłoszenie
                  </Button>
                  <StyledLink to="/login">
                    <Typography variant="PStyled">Zaloguj się aby dodać ogłoszenie </Typography>
                  </StyledLink>
                </>
              ) : (
                <Button variant="contained" size="large" href="/add-offer">
                  Kup ogłoszenie
                </Button>
              )}
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
              {!userToken ? (
                <>
                  <Button variant="contained" size="large" href="/add-offer" disabled>
                    Kup ogłoszenie
                  </Button>
                  <StyledLink to="/login">
                    <Typography variant="PStyled">Zaloguj się aby dodać ogłoszenie </Typography>
                  </StyledLink>
                </>
              ) : (
                <Button variant="contained" size="large" href="/add-offer">
                  Kup ogłoszenie
                </Button>
              )}
            </ContentOffer>
          </OfferBox>
        </ContentOffers>
      </OffersBox>
    </Fragment>
  );
};
