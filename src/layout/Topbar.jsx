import { AppBar, Toolbar, Button, Typography } from "@mui/material";

export default function Topbar({ setUser }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flex: 1 }}>Stock Management</Typography>
        <Button color="inherit" onClick={() => setUser(null)}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
