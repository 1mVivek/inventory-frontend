import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth";

export default function Topbar({ onMenuClick }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#020617",
        borderBottom: "1px solid #1e293b"
      }}
    >
      <Toolbar>
        {/* Mobile Menu */}
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>

        {/* Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Stock Management
        </Typography>

        {/* Right Side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
