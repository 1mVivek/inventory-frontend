import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const rows = [
  { id: 1, product: "Item A", type: "IN", qty: 20 },
  { id: 2, product: "Item B", type: "OUT", qty: 5 },
  { id: 3, product: "Item C", type: "IN", qty: 15 },
];

export default function StockActivityTable() {
  return (
    <TableContainer component={Paper}>
      <Typography sx={{ p: 2 }} variant="h6">
        Stock Activity
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.qty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
