import {
  Dialog, DialogTitle, DialogContent, TextField, Button
} from "@mui/material";

export default function ProductModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent>
        <TextField fullWidth label="Name" margin="normal" />
        <TextField fullWidth label="Category" margin="normal" />
        <TextField fullWidth label="Price" margin="normal" />
        <TextField fullWidth label="Stock" margin="normal" />
        <Button variant="contained" sx={{ mt: 2 }} onClick={onClose}>
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
}
