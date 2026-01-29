import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

export default function ProductTable({ products }) {
  if (!products || products.length === 0) {
    return <p style={{ marginTop: 20 }}>No products yet</p>;
  }

  return (
    <Paper sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Category</b></TableCell>
            <TableCell><b>Price</b></TableCell>
            <TableCell><b>Stock</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>₹{product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}