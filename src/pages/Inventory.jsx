import { receivePurchaseOrder } from "../logic/inventory";
import { Button } from "@mui/material";
import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";
import { useState } from "react";

export default function Inventory() {
  const [open, setOpen] = useState(false);

return (
  <div style={{ padding: 20 }}>
    <Button
      variant="contained"
      onClick={() => setOpen(true)}
      sx={{ mr: 2 }}
    >
      Add New Product
    </Button>

    {/* 🔧 TEMP TEST STOCK IN BUTTON */}
    <Button
      variant="outlined"
      color="success"
      onClick={async () => {
        try {
          const poId = "TEST_PO_001"; // must exist in Firestore
          await receivePurchaseOrder(poId);
          alert(" Stock IN successful");
        } catch (err) {
          console.error(err);
          alert(" Stock IN failed");
        }
      }}
    >
      TEST STOCK IN
    </Button>

    <ProductTable />
    <ProductModal open={open} onClose={() => setOpen(false)} />
  </div>
);