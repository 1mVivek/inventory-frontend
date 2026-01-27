import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0b1020",
      paper: "#0f172a"
    },
    primary: {
      main: "#1e88e5"
    }
  },
  shape: {
    borderRadius: 10
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif"
  }
});

export default theme;
