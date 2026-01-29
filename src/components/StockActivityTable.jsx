import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  CircularProgress,
  Box,
} from "@mui/material";

import useStockActivity from "../hooks/useStockActivity";

export default function StockActivityTable() {
  const { activities, loading } = useStockActivity();

  if (loading) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!activities.length) {
    return (
      <Typography sx={{ p: 2 }} color="text.secondary">
        No stock activity yet
      </Typography>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Typography sx={{ p: 2 }} variant="h6">
        Stock Activity
      </Typography>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {activities.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.productName}</TableCell>

              <TableCell>
                <Chip
                  label={row.type}
                  color={row.type === "IN" ? "success" : "error"}
                  size="small"
                />
              </TableCell>

              <TableCell>{row.quantity}</TableCell>

              <TableCell>
                {new Date(row.createdAt).toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}