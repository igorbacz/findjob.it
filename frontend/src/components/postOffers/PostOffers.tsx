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
import { userDataSelector } from "../../service/user/selectors";
import { useSelector } from "react-redux";
import { UserState } from "../../types/types";

export const PostOffers = () => {
  const userData: UserState = useSelector(userDataSelector);
  const isAuthenticated: boolean = userData.isAuthenticated;
  return (
    <Fragment>
      <HeaderPostOffers>
        <HeaderText>
          <Typography variant="H2Styled">The fast way [to warm mars] is to drop thermonuclear weapons over the poles. — Elon Musk</Typography>
        </HeaderText>
        <ImgBox sx={{ display: { xs: "none", md: "none", lg: "block", xl: "block" } }}>
          <img src="https://justjoin.it/next-assets/addOffer/technology-header.svg" alt="ikony"></img>
        </ImgBox>
      </HeaderPostOffers>
      <OffersBox>
        <Typography variant="H3Styled">Get to know job ads on findjob.it</Typography>
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
                  <StyledLink to="/add-offer">
                    <Button variant="contained" size="large" disabled>
                      Post a job
                    </Button>
                  </StyledLink>
                  <StyledLink to="/login">
                    <Typography variant="PStyled">Log in to add the job offer</Typography>
                  </StyledLink>
                </>
              ) : (
                <StyledLink to={"/add-offer"}>
                  <Button variant="contained" size="large">
                    Post a job
                  </Button>
                </StyledLink>
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
                  <StyledLink to="/add-offer">
                    <Button variant="contained" size="large" disabled>
                      Post a job
                    </Button>
                  </StyledLink>
                  <StyledLink to="/login">
                    <Typography variant="PStyled">Log in to add the job offer</Typography>
                  </StyledLink>
                </>
              ) : (
                <StyledLink to="/add-offer">
                  <Button variant="contained" size="large">
                    Post a job
                  </Button>
                </StyledLink>
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
                  <StyledLink to="/add-offer">
                    <Button variant="contained" size="large" disabled>
                      Post a job
                    </Button>
                  </StyledLink>
                  <StyledLink to="/login">
                    <Typography variant="PStyled">Log in to add the job offer</Typography>
                  </StyledLink>
                </>
              ) : (
                <StyledLink to="/add-offer">
                  <Button variant="contained" size="large">
                    Post a job
                  </Button>
                </StyledLink>
              )}
            </ContentOffer>
          </OfferBox>
        </ContentOffers>
      </OffersBox>
    </Fragment>
  );
};
