import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const items = [
  { text: "Dashboard", path: "/" },
  { text: "Inventory", path: "/inventory" },
  { text: "Orders", path: "/orders" },
  { text: "Suppliers", path: "/suppliers" },
  { text: "Reports", path: "/reports" },
  { text: "Settings", path: "/settings" },
];

export default function Sidebar({ mobileOpen, onClose, drawerWidth }) {
  const drawer = (
    <Box
      sx={{
        height: "100%",
        bgcolor: "background.paper",
        color: "text.primary",
      }}
    >
      <Toolbar />

      <List>
        {items.map((i) => (
          <ListItem key={i.text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={i.path}
              onClick={onClose}
              sx={{
                px: 3,
                "&.active": {
                  bgcolor: "action.selected",
                },
                "&:hover": {
                  bgcolor: "action.hover",
                },
              }}
            >
              <ListItemText primary={i.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "background.paper",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "background.paper",
            borderRight: "1px solid",
            borderColor: "divider",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}
