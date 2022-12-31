import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import { Box } from "@mui/system";

export const GLOBAL_THEME = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#004aad",
      light: "#b3d4ff",
      dark: "#01306e",
    },
    secondary: {
      main: "#faa92f",
      light: "#fccc83",
      dark: "#724601",
    },
    success: {
      main: "#00af54",
      light: "#d2ffc8",
    },
    error: {
      main: "#bf211e",
      light: "#ffc8cb",
    },
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: "500",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: "600",
    },
    h3: {
      fontSize: "2.25rem",
      fontWeight: "600",
    },
    h4: {
      fontSize: "1.875rem",
      fontWeight: "600",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: "700",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "700",
    },
    fontFamily: ["Sarabun", "Roboto", "Helvetica Neue", "Arial", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={GLOBAL_THEME}>
      <NavBar />
      <Intro />
      <Box height="3rem"></Box>
    </ThemeProvider>
  );
}

export default App;
