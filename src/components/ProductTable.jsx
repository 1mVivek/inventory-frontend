import {
  Table, TableHead, TableRow, TableCell, TableBody
} from "@mui/material";

export default function ProductTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>SKU</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Stock</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        <TableRow>
          <TableCell>SKU001</TableCell>
          <TableCell>Sample Product</TableCell>
          <TableCell>Electronics</TableCell>
          <TableCell>$500</TableCell>
          <TableCell>20</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
