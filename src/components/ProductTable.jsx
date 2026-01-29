import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export default function ProductTable({ items }) {
  if (!items?.length) {
    return <p style={{ opacity: 0.7 }}>No products yet</p>;
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
        {items.map(item => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>₹ {item.price}</TableCell>
            <TableCell>{item.stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}