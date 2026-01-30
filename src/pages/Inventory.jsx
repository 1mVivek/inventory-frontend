import { Button } from "@mui/material";
import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";
import { useState } from "react";

export default function Inventory() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  return (
    <div style={{ padding: 20 }}>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        sx={{ mr: 2 }}
      >
        ADD NEW PRODUCT
      </Button>

      <ProductTable products={products} />

      <ProductModal
        open={open}
        onClose={() => setOpen(false)}
        onAddProduct={handleAddProduct} 
      />
    </div>
  );
}