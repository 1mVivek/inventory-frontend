import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import { addItem } from "../services/api";

export default function ProductModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  function update(key, value) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  async function save() {
    if (!form.name) return alert("Name required");

    await addItem({
      name: form.name,
      category: form.category,
      price: Number(form.price),
      stock: Number(form.stock),
    });

    onClose();
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          onChange={e => update("name", e.target.value)}
        />
        <TextField
          label="Category"
          fullWidth
          margin="normal"
          onChange={e => update("category", e.target.value)}
        />
        <TextField
          label="Price"
          type="number"
          fullWidth
          margin="normal"
          onChange={e => update("price", e.target.value)}
        />
        <TextField
          label="Stock"
          type="number"
          fullWidth
          margin="normal"
          onChange={e => update("stock", e.target.value)}
        />

        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={save}
        >
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
}