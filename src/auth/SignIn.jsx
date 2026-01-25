import { Button, TextField, Typography, Box } from "@mui/material";

export default function SignIn({ setUser }) {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 10 }}>
      <Typography variant="h4">Sign In</Typography>

      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Password" type="password" margin="normal" />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={() => setUser({ name: "Demo User" })}
      >
        Sign In
      </Button>

      <Typography sx={{ mt: 2, fontSize: 14 }}>
        Forgot password? | New user? <a href="/signup">Sign up</a>
      </Typography>
    </Box>
  );
}
