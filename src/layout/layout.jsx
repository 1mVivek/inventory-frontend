import { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const drawerWidth = 240;

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#0b1020" }}>
      
      {/* Topbar */}
      <Topbar onMenuClick={() => setMobileOpen(true)} />

      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        drawerWidth={drawerWidth}
      />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          mt: "64px",
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
