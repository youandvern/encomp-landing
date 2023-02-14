import { Box, Button, styled } from "@mui/material";
import { ABOUT_CLASS, CONTACT_CLASS, EXTRA_LIGHT, PRODUCT_CLASS, TOP_CLASS } from "../constants";

const NAV_BAR_HEIGHT = 3;
const NAV_BAR_HEIGHT_SMALL = 2;
const PADDING = 0;

const numToRem = (num: number) => `${num}rem`;

const NavBoxBackground = styled(Box)(({ theme }) => ({
  paddingTop: numToRem(PADDING),
  height: numToRem(NAV_BAR_HEIGHT),
  width: "105%",
  position: "fixed",
  top: 0,
  left: "-10px",
  background: `radial-gradient(circle at right top, white, ${EXTRA_LIGHT})`,
  color: theme.palette.primary.main,
  [theme.breakpoints.down("md")]: {
    paddingTop: 0,
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: 0,
    height: numToRem(NAV_BAR_HEIGHT_SMALL),
  },
}));

const NavBox = styled(Box)(({ theme }) => ({
  height: numToRem(NAV_BAR_HEIGHT),
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  top: 0,
  left: "10px",
  color: "inherit",
  [theme.breakpoints.down("sm")]: {
    height: numToRem(NAV_BAR_HEIGHT_SMALL),
  },
}));

const NavBoxPlaceholder = styled(Box)(({ theme }) => ({
  height: numToRem(NAV_BAR_HEIGHT + 2 * PADDING),
  marginBottom: numToRem(2 * PADDING),
  [theme.breakpoints.down("md")]: {
    height: numToRem(NAV_BAR_HEIGHT + PADDING),
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: 0,
    height: numToRem(NAV_BAR_HEIGHT_SMALL + PADDING),
  },
}));

const LogoImage = styled("img")(({ theme }) => ({
  objectFit: "contain",
  cursor: "pointer",
  height: numToRem(NAV_BAR_HEIGHT - PADDING),
  marginLeft: numToRem(2),
  marginRight: "5rem",
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
    marginRight: 0,
    height: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    marginRight: 0,
    height: numToRem(NAV_BAR_HEIGHT_SMALL - PADDING),
  },
}));

const NavBarHref = styled(Button)(({ theme }) => ({
  textDecoration: "none",
  textTransform: "none",
  marginInline: "1rem",
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "inherit",
  textShadow: "0px 0px 1px black",
  [theme.breakpoints.down("md")]: {
    marginInline: 0,
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginInline: 0,
    fontSize: "1rem",
  },
}));

const scrollToSection = (idName: string) => () => {
  const section = document.getElementById(idName);
  section && section.scrollIntoView({ behavior: "smooth" });
};

export default function NavBar() {
  return (
    <>
      <NavBoxBackground
        sx={{ filter: "blur(5px)", transform: "translate3d(0px, 10px, 0px)" }}
      ></NavBoxBackground>
      <NavBoxBackground>
        <NavBox>
          <LogoImage
            src="/encomp_noback.png"
            alt="Encomp Logo"
            onClick={scrollToSection(TOP_CLASS)}
          />
          <NavBarHref onClick={scrollToSection(PRODUCT_CLASS)}>Product</NavBarHref>
          <NavBarHref onClick={scrollToSection(ABOUT_CLASS)}>About</NavBarHref>
          <NavBarHref onClick={scrollToSection(CONTACT_CLASS)}>Contact</NavBarHref>
          <Box width={{ xs: 0, lg: "16rem" }}></Box>
        </NavBox>
      </NavBoxBackground>
      <NavBoxPlaceholder />
    </>
  );
}
