import { Card, CardContent, Typography } from "@mui/material";

export default function KPI({ title, value, color = "#1976d2" }) {
  return (
    <Card sx={{ borderLeft: `6px solid ${color}` }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
