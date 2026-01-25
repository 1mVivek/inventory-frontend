import { Button } from "@mui/material";
import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";
import { useState } from "react";

export default function Inventory() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add New Product
      </Button>

      <ProductTable />
      <ProductModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
