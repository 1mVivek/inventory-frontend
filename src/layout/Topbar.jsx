import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Topbar({ onMenuClick }) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* Mobile menu */}
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>

        {/* App title */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 600 }}
        >
          Stock Management
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
