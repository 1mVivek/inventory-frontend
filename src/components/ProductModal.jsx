import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import { addProduct } from "../services/api";

export default function ProductModal({ open, onClose, onProductAdded }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!form.name || !form.price || !form.stock) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    try {
      await addProduct({
        name: form.name,
        category: form.category,
        price: Number(form.price),
        stock: Number(form.stock),
      });

      onProductAdded(); // refresh table
      onClose();

      setForm({
        name: "",
        category: "",
        price: "",
        stock: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
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
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
