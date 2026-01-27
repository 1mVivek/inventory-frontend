import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,

      ...(mode === "dark"
        ? {
            background: {
              default: "#0b1020",
              paper: "#0f172a",
            },
            text: {
              primary: "#e5e7eb",
              secondary: "#9ca3af",
            },
          }
        : {
            background: {
              default: "#f8fafc",
              paper: "#ffffff",
            },
            text: {
              primary: "#0f172a",
              secondary: "#475569",
            },
          }),
    },

    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: "none", // removes weird gradient
          },
        },
      },
    },
  });
