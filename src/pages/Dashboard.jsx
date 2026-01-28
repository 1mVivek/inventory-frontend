import { Grid } from "@mui/material";
import KPI from "../components/KPI";
import useDashboardStats from "../hooks/useDashboardStats";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", stock: 400 },
  { month: "Feb", stock: 300 },
  { month: "Mar", stock: 500 },
];

export default function Dashboard() {
const stats = useDashboardStats();
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>

      <Grid item xs={12} sm={6} md={3}>
  <KPI title="Total Products" value={stats.totalProducts} />
</Grid>

<Grid item xs={12} sm={6} md={3}>
  <KPI title="Low Stock" value={stats.lowStock} />
</Grid>

<Grid item xs={12} sm={6} md={3}>
  <KPI title="Out of Stock" value={stats.outOfStock} />
</Grid>

<Grid item xs={12} sm={6} md={3}>
  <KPI
    title="Inventory Value"
    value={`₹${stats.inventoryValue.toLocaleString()}`}
  />
</Grid>

      <Grid item xs={12} xs={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line dataKey="stock" stroke="#1976d2" />
          </LineChart>
        </ResponsiveContainer>
      </Grid>

    </Grid>
  );
}
