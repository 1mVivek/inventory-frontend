import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";
import localforage from "localforage";

export default function ProductModal({ open, onClose }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSave = async () => {
    if (!name || !category || !price || !stock) {
      alert("Fill all fields");
      return;
    }

    const newProduct = {
      id: crypto.randomUUID(),
      sku: "SKU-" + Math.floor(Math.random() * 10000),
      name,
      category,
      price: Number(price),
      quantity: Number(stock),
      createdAt: Date.now(),
    };

    const existing = (await localforage.getItem("products")) || [];
    await localforage.setItem("products", [...existing, newProduct]);

    // reset form
    setName("");
    setCategory("");
    setPrice("");
    setStock("");

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Add Product</DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />

          <TextField
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
          />

          <TextField
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
          />

          <TextField
            label="Stock"
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            fullWidth
          />

          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}