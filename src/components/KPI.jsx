import { Card, Typography } from "@mui/material";

export default function KPI({ title, value }) {
  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="body2">{title}</Typography>
      <Typography variant="h5">{value}</Typography>
    </Card>
  );
}