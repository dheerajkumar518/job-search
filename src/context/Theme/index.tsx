"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(57, 59, 61)",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "unset",
          borderRadius: "8px",
          height: "37px",
        },
        text: {
          "&:hover": {
            color: "white",
            backgroundColor: "rgb(24, 103, 80)",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderBottomLeftRadius: "10px",
          borderTopLeftRadius: "10px",
        },
      },
    },
  },
});
