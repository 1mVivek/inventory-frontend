import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";
import { Button, TextField, Typography, Box } from "@mui/material";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const token = await login(email, password);
      localStorage.setItem("token", token);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 10 }}>
      <Typography variant="h4" mb={2}>
        Sign In
      </Typography>

      <TextField
        fullWidth
        label="Email"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleLogin}
      >
        Login
      </Button>

      <Typography mt={2}>
        Don’t have an account?{" "}
        <span
          style={{ color: "#7c7cff", cursor: "pointer" }}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </span>
      </Typography>
    </Box>
  );
}
