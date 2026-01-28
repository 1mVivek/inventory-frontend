import { Grid } from "@mui/material";
import KPI from "../components/KPI";
import StockActivityTable from "../components/StockActivityTable";
import useDashboardStats from "../hooks/useDashboardStats";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", stock: 400 },
  { month: "Feb", stock: 300 },
  { month: "Mar", stock: 500 },
];

export default function Dashboard() {
  const stats = useDashboardStats();

  if (!stats) return null; // 🛡️ safety guard

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {/* KPI CARDS */}
      <Grid item xs={12} sm={6} md={3}>
        <KPI title="Total Products" value={stats.totalProducts} color="#1976d2" />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <KPI title="Low Stock" value={stats.lowStock} color="#ed6c02" />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <KPI title="Out of Stock" value={stats.outOfStock} color="#d32f2f" />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <KPI
          title="Inventory Value"
          value={`₹ ${stats.inventoryValue.toLocaleString()}`}
          color="#2e7d32"
        />
      </Grid>

      {/* CHART */}
      <Grid item xs={12} sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line dataKey="stock" stroke="#1976d2" />
          </LineChart>
        </ResponsiveContainer>
      </Grid>

      {/* STOCK ACTIVITY TABLE */}
      <Grid item xs={12}>
        <StockActivityTable />
      </Grid>
    </Grid>
  );
}
