import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export default function ProductTable({ products }) {
  if (!products.length) {
    return <p>No products yet</p>;
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Stock</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((p) => (
          <TableRow key={p.id}>
            <TableCell>{p.name}</TableCell>
            <TableCell>{p.category}</TableCell>
            <TableCell>₹{p.price}</TableCell>
            <TableCell>{p.stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}