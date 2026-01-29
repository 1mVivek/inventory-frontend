import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useEffect, useState } from "react";
import localforage from "localforage";

export default function ProductTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const stored = await localforage.getItem("products");
      setProducts(stored || []);
    };

    loadProducts();
  }, []);

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
        {products.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} align="center">
              No products added yet
            </TableCell>
          </TableRow>
        ) : (
          products.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.sku}</TableCell>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.category}</TableCell>
              <TableCell>₹{p.price}</TableCell>
              <TableCell>{p.quantity}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}