import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";
import { getItems } from "../services/api";

export default function Inventory() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);

  async function load() {
    const data = await getItems();
    setItems(data);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add New Product
      </Button>

      <ProductTable items={items} />
      <ProductModal
        open={open}
        onClose={() => {
          setOpen(false);
          load();
        }}
      />
    </div>
  );
}