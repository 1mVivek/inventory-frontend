import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";

export default function ProductModal({ open, onClose, onAddProduct }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // basic validation
    if (!form.name || !form.category) return;

    onAddProduct({
      id: Date.now(),
      name: form.name,
      category: form.category,
      price: Number(form.price),
      stock: Number(form.stock),
    });

    // reset form after save
    setForm({
      name: "",
      category: "",
      price: "",
      stock: "",
    });

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Product</DialogTitle>

      <DialogContent>
        <TextField
          name="name"
          label="Name"
          fullWidth
          margin="normal"
          value={form.name}
          onChange={handleChange}
        />

        <TextField
          name="category"
          label="Category"
          fullWidth
          margin="normal"
          value={form.category}
          onChange={handleChange}
        />

        <TextField
          name="price"
          label="Price"
          type="number"
          fullWidth
          margin="normal"
          value={form.price}
          onChange={handleChange}
        />

        <TextField
          name="stock"
          label="Stock"
          type="number"
          fullWidth
          margin="normal"
          value={form.stock}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleSave}
        >
          SAVE
        </Button>
      </DialogContent>
    </Dialog>
  );
}