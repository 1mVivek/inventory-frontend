import React, { useMemo, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Loader from "./components/Loader";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { ColorModeContext } from "./theme/ColorModeContext";
import { getTheme } from "./theme";

function Root() {
  const [mode, setMode] = useState(
    localStorage.getItem("theme") || "light"
  );
  const [loading, setLoading] = useState(true);

  // fake startup delay (later replaced by auth/firebase init)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prev => {
          const next = prev === "light" ? "dark" : "light";
          localStorage.setItem("theme", next);
          return next;
        });
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  if (loading) return <Loader />;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
