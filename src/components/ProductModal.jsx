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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onAddProduct({
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
      id: Date.now(),
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent>
        <TextField
          name="name"
          label="Name"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          name="category"
          label="Category"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          name="price"
          label="Price"
          type="number"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          name="stock"
          label="Stock"
          type="number"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />

        <Button variant="contained" sx={{ mt: 2 }} onClick={handleSave}>
          SAVE
        </Button>
      </DialogContent>
    </Dialog>
  );
}