import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const token = await login(email, password);

      // 🔐 Store token (optional but useful)
      localStorage.setItem("token", token);

      navigate("/"); // ✅ go to dashboard
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-page">
      <h2>Sign In</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
      <p style={{ marginTop: "12px" }}>
  Don’t have an account?{" "}
  <span
    style={{ color: "#7c7cff", cursor: "pointer" }}
    onClick={() => navigate("/signup")}
  >
    Sign Up
  </span>
</p>
    </div>
  );
}
