export default function KPI({ title, value }) {
  return (
    <div style={{
      padding: "16px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      minWidth: "150px"
    }}>
      <h4>{title}</h4>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}
