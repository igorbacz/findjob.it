import { CSSProperties } from "react";
import { TrueLiteral } from "typescript";

declare module "@mui/material" {
  interface TypographyVariants {
    buttonFont: CSSProperties;
    headerFont: CSSProperties;
    dataDesc: CSSProperties;
    subtitleLight: CSSProperties;
    subtitle3: CSSProperties;
    subtitle4: CSSProperties;
    subtitle5: CSSProperties;
    H2Styled: CSSProperties;
    H3Styled: CSSProperties;
    H1Styled: CSSProperties;
    H6Light: CSSProperties;
    PStyled: CSSProperties;
    H5Styled: CSSProperties;
    subtitleStrong: CSSProperties;
    subtitle6: CSSProperties;
    RemoteTypography: CSSProperties;
    TabPink: CSSProperties;
    H2StyledBold: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    buttonFont?: CSSProperties;
    headerFont?: CSSProperties;
    dataDesc?: CSSProperties;
    subtitleLight?: CSSProperties;
    subtitle3?: CSSProperties;
    subtitle4?: CSSProperties;
    subtitle5?: CSSProperties;
    H2Styled?: CSSProperties;
    H3Styled?: CSSProperties;
    H1Styled?: CSSProperties;
    H6Light?: CSSProperties;
    PStyled?: CSSProperties;
    H5Styled?: CSSProperties;
    subtitleStrong?: CSSProperties;
    subtitle6?: CSSProperties;
    RemoteTypography?: CSSProperties;
    TabPink?: CSSProperties;
    H2StyledBold?: CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    buttonFont: true;
    headerFont: true;
    dataDesc: true;
    subtitleLight: true;
    subtitle3: true;
    subtitle4: true;
    subtitle5: true;
    H2Styled: true;
    H3Styled: true;
    H1Styled: true;
    H6Light: true;
    PStyled: true;
    H5Styled: true;
    subtitleStrong: true;
    subtitle6: true;
    RemoteTypography: true;
    TabPink: true;
    H2StyledBold: true;
  }
}
