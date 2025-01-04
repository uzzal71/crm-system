import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import PublicLayout from "../layouts/public-layout/PublicLayout";

type loginType = {
  email: string;
  password: string;
};

const loginFormSchema = yup.object().shape({
  email: yup.string().email().required("Email is a required field."),
  password: yup.string().required("Password is a required field."),
});

const defaultValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({
    defaultValues,
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = ({ email, password }: loginType) => {
    console.log(email, password);
    navigate("/dashboard");
  };

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
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          textTransform="uppercase"
          gutterBottom
        >
          CRM Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          autoComplete="off"
        >
          <TextField
            error={errors?.email?.message ? true : false}
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            variant="outlined"
            helperText={errors?.email?.message}
            {...register("email")}
          />
          <TextField
            error={errors?.password?.message ? true : false}
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            helperText={errors?.password?.message}
            {...register("password")}
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
