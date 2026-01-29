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

  async function save() {
    await addItem({
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
    });
    onClose();
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent>
        <TextField fullWidth label="Name" margin="normal"
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <TextField fullWidth label="Category" margin="normal"
          onChange={e => setForm({ ...form, category: e.target.value })}
        />
        <TextField fullWidth label="Price" margin="normal"
          onChange={e => setForm({ ...form, price: e.target.value })}
        />
        <TextField fullWidth label="Stock" margin="normal"
          onChange={e => setForm({ ...form, stock: e.target.value })}
        />
        <Button sx={{ mt: 2 }} variant="contained" onClick={save}>
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
}