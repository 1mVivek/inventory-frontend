import { Grid } from "@mui/material";
import KPI from "../components/KPI.jsx";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", stock: 400 },
  { month: "Feb", stock: 300 },
  { month: "Mar", stock: 500 },
];

export default function Dashboard() {
  return (
    <Grid container spacing={2} padding={2}>
      <KPI title="Total Products" value="120" />
      <KPI title="Low Stock" value="8" />
      <KPI title="Out of Stock" value="3" />
      <KPI title="Inventory Value" value="$45,000" />

      <Grid item xs={12} height={300}>
        <ResponsiveContainer>
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
