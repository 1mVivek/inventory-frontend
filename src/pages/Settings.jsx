import { Box, Typography, Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import { logout } from "../services/auth";

export default function Settings() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <Box sx={{ maxWidth: 500 }}>
      <Typography variant="h5" gutterBottom>
        Settings
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* Theme */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography>Dark Mode</Typography>
        <ThemeToggle />
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Logout */}
      <Button
        variant="outlined"
        color="error"
        fullWidth
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Box>
  );
}
