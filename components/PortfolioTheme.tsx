"use client";

import type { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "dark",
    primary: { main: "#a6e891", contrastText: "#13220e" },
    secondary: { main: "#85b9ed" },
    background: { default: "#0b0e11", paper: "#11171c" },
    text: { primary: "#eff1eb", secondary: "#a1a9b3" },
    divider: "#303942",
  },
  typography: {
    fontFamily: '"Segoe UI Variable", "Segoe UI", Arial, sans-serif',
    button: { textTransform: "none", fontWeight: 600, fontSize: 13 },
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButtonBase: {
      defaultProps: { disableRipple: true },
      styleOverrides: {
        root: {
          "&.Mui-focusVisible": { outline: "2px solid #a6e891", outlineOffset: 4 },
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { minHeight: 44, gap: 8, borderRadius: 8 } },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: { root: { backgroundImage: "none" } },
    },
    MuiCard: { defaultProps: { variant: "outlined" } },
    MuiLink: {
      defaultProps: { underline: "none", color: "inherit" },
    },
    MuiChip: {
      defaultProps: { size: "small", variant: "outlined" },
      styleOverrides: {
        root: {
          height: 27,
          borderRadius: 5,
          borderColor: "#35414a",
          color: "#bcc7cf",
          fontFamily: '"Cascadia Code", Consolas, monospace',
          fontSize: 11,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          minHeight: 44,
          textTransform: "none",
          fontSize: 12,
          color: "#a1a9b3",
          "&.Mui-selected": {
            color: "#a6e891",
            backgroundColor: "#a6e8910b",
            borderColor: "#657d54",
          },
        },
      },
    },
  },
});

export function PortfolioTheme({ children }: { children: ReactNode }) {
  return <AppRouterCacheProvider options={{ enableCssLayer: true }}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </AppRouterCacheProvider>;
}
