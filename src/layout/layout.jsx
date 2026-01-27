import { useState } from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <Topbar onMenuClick={() => setMobileOpen(!mobileOpen)} />

      <Sidebar
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          mt: 8, // space below AppBar
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
