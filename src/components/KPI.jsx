export default function KPI({ title = "KPI", value = "-" }) {
  return (
    <div style={{
      padding: "12px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      marginBottom: "12px"
    }}>
      <h4>{title}</h4>
      <strong>{value}</strong>
    </div>
  );
}
