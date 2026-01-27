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
          }
        : {
            background: {
              default: "#f8fafc",
              paper: "#ffffff",
            },
          }),
    },
  });
