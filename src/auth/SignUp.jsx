import { Button, TextField, Typography, Box } from "@mui/material";

export default function SignUp() {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 10 }}>
      <Typography variant="h4">Sign Up</Typography>

      <TextField fullWidth label="Name" margin="normal" />
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Password" type="password" margin="normal" />
      <TextField fullWidth label="Confirm Password" type="password" margin="normal" />

      <Button fullWidth variant="contained" sx={{ mt: 2 }}>
        Create Account
      </Button>
    </Box>
  );
}
