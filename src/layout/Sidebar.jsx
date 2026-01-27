import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const items = [
  { text: "Dashboard", path: "/" },
  { text: "Inventory", path: "/inventory" },
  { text: "Orders", path: "/orders" },
  { text: "Suppliers", path: "/suppliers" },
  { text: "Reports", path: "/reports" },
  { text: "Settings", path: "/settings" },
];

export default function Sidebar({ mobileOpen, onClose }) {
  const drawer = (
    <>
      <Toolbar />
      <List>
        {items.map((i) => (
          <ListItem
            button
            key={i.text}
            component={Link}
            to={i.path}
            onClick={onClose}
          >
            <ListItemText primary={i.text} />
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <>
      {/* Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}
