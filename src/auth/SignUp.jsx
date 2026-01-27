import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/auth";
import { Button, TextField, Typography, Box } from "@mui/material";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const token = await signup(email, password);

      // ✅ auto-login
      localStorage.setItem("token", token);

      navigate("/"); // go to dashboard
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 10 }}>
      <Typography variant="h4" mb={2}>
        Sign Up
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
        onClick={handleSignup}
      >
        Create Account
      </Button>

      <Typography mt={2}>
        Already have an account?{" "}
        <span
          style={{ color: "#7c7cff", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </Typography>
    </Box>
  );
}
