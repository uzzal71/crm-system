import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import PublicLayout from "../layouts/public-layout/PublicLayout";

const Login = () => {
  return (
    <PublicLayout>
      <Container
        maxWidth="xs"
        sx={{
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 3,
          p: 3,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            required
          />
          <Box sx={{ textAlign: "right", mb: 2 }}>
            <Link href="#" variant="body2" sx={{ textDecoration: "none" }}>
              Forgot Password?
            </Link>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ py: 1.5 }}
          >
            Login
          </Button>
        </Box>
      </Container>
    </PublicLayout>
  );
};

export default Login;
