import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const items = [
  { text: "Dashboard", path: "/" },
  { text: "Inventory", path: "/inventory" },
  { text: "Orders", path: "/orders" },
  { text: "Suppliers", path: "/suppliers" },
  { text: "Reports", path: "/reports" },
  { text: "Settings", path: "/settings" },
];

export default function Sidebar() {
  return (
    <Drawer variant="permanent">
      <List sx={{ width: 240 }}>
        {items.map((i) => (
          <ListItem button component={Link} to={i.path} key={i.text}>
            <ListItemText primary={i.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
