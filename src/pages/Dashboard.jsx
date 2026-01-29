import { Grid } from "@mui/material";
import KPI from "../components/KPI";
import useDashboardStats from "../hooks/useDashboardStats";

export default function Dashboard() {
  const stats = useDashboardStats();
  if (!stats) return null;

  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12} md={3}>
        <KPI title="Total Products" value={stats.totalProducts} />
      </Grid>
      <Grid item xs={12} md={3}>
        <KPI title="Low Stock" value={stats.lowStock} />
      </Grid>
      <Grid item xs={12} md={3}>
        <KPI title="Out of Stock" value={stats.outOfStock} />
      </Grid>
      <Grid item xs={12} md={3}>
        <KPI
          title="Inventory Value"
          value={`₹ ${stats.inventoryValue.toLocaleString()}`}
        />
      </Grid>
    </Grid>
  );
}