import { Box, styled } from "@mui/material";
import { EXTRA_LIGHT } from "../color";

const NAV_BAR_HEIGHT = 4;
const NAV_BAR_HEIGHT_SMALL = 2;
const PADDING = 0.5;

const numToRem = (num: number) => `${num}rem`;

const NavBoxBackground = styled(Box)(({ theme }) => ({
  paddingTop: numToRem(PADDING),
  height: numToRem(NAV_BAR_HEIGHT),
  width: "105%",
  position: "fixed",
  top: 0,
  left: "-10px",
  background: `radial-gradient(at right top, ${EXTRA_LIGHT}, ${theme.palette.secondary.light})`,
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
  height: numToRem(NAV_BAR_HEIGHT - PADDING),
  marginLeft: numToRem(4 * PADDING),
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

const NavBarHref = styled("a")(({ theme }) => ({
  textDecoration: "none",
  marginInline: "1rem",
  fontFamily: "sans-serif",
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    marginInline: 0,
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginInline: 0,
    fontSize: "1rem",
  },
}));

export default function NavBar() {
  return (
    <>
      <NavBoxBackground
        sx={{ filter: "blur(5px)", transform: "translate3d(0px, 10px, 0px)" }}
      ></NavBoxBackground>
      <NavBoxBackground>
        <NavBox>
          <LogoImage src="/encomp_noback.png" alt="Encomp Logo" />
          <NavBarHref
            href="https://efficalc.encompapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Product
          </NavBarHref>
          <NavBarHref href="https://trussanalysis.com/" target="_blank" rel="noopener noreferrer">
            About
          </NavBarHref>
          <NavBarHref
            href="https://concrete.encompapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </NavBarHref>
          <Box width={{ xs: 0, lg: "16rem" }}></Box>
        </NavBox>
      </NavBoxBackground>
      <NavBoxPlaceholder />
    </>
  );
}
