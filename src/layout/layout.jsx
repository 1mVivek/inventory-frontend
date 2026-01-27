import { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const drawerWidth = 240;

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prev => !prev);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#0b1020" }}>
      {/* Top Navigation */}
      <Topbar onMenuClick={handleDrawerToggle} />

      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileOpen}
        onClose={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />

      {/* Main Content */}
      <Box
  component="main"
  sx={{
    flexGrow: 1,
    p: 2,
    mt: "64px",              // pushes content below AppBar
    ml: { sm: `${drawerWidth}px` }, // space for desktop sidebar
    backgroundColor: "#0b1020",
  }}
>
  <Outlet />
</Box>
    </Box>
  );
}
