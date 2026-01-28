import {
  Table, TableBody, TableCell, TableHead, TableRow
} from "@mui/material";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../services/firebase";
import { useEffect, useState } from "react";

export default function StockActivityTable() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const q = query(
        collection(db, "stock_logs"),
        orderBy("createdAt", "desc"),
        limit(10)
      );

      const snap = await getDocs(q);
      setLogs(snap.docs.map(d => d.data()));
    };

    fetchLogs();
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Product</TableCell>
          <TableCell>Action</TableCell>
          <TableCell>Qty</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {logs.map((log, i) => (
          <TableRow key={i}>
            <TableCell>{log.productName}</TableCell>
            <TableCell>{log.type}</TableCell>
            <TableCell>{log.quantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
