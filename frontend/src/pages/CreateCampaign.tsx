import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import PublicLayout from "../layouts/public-layout/PublicLayout";

type campaignType = {
  name: string;
  message: string;
  type: string;
  file: string;
  scheduleTime: string;
};

const campaignFormSchema = yup.object().shape({
  name: yup.string().required("Campaign name is a required field."),
  message: yup.string().required("Message is a required field."),
  type: yup.string().required("Campaign type is a required field."),
  file: yup.string().required("File is a required field."),
  scheduleTime: yup
    .string()
    .required("Schedule time is a required field.")
    .test(
      "isFuture",
      "Schedule time must be in the future.",
      (value) => !value || new Date(value) > new Date()
    ),
});

// Default values for the form
const defaultValues = {
  name: "",
  message: "",
  type: "",
  file: "",
  scheduleTime: "",
};

const CreateCampaign = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<campaignType>({
    defaultValues,
    resolver: yupResolver(campaignFormSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const onSubmit = ({
    name,
    message,
    type,
    file,
    scheduleTime,
  }: campaignType) => {
    console.log(name, message, type, file, scheduleTime);
  };

  return (
    <PublicLayout>
      <Container
        maxWidth="sm"
        sx={{
          mt: 4,
          p: 3,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Create Campaign
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          autoComplete="off"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            error={errors?.name?.message ? true : false}
            label="Campaign Name"
            variant="outlined"
            fullWidth
            helperText={errors?.name?.message}
            {...register("name")}
          />
          <TextField
            error={errors?.message?.message ? true : false}
            label="Message Content"
            variant="outlined"
            fullWidth
            helperText={errors?.message?.message}
            {...register("message")}
            multiline
            rows={4}
          />
          <TextField
            error={errors?.type?.message ? true : false}
            label="Campaign type"
            variant="outlined"
            select
            fullWidth
            helperText={errors?.type?.message}
            {...register("type")}
          >
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="phone">Phone</MenuItem>
          </TextField>
          <Button
            variant="contained"
            component="label"
            sx={{
              textTransform: "none",
              backgroundColor: "#1976d2",
              color: "white",
            }}
          >
            Upload Recipient List
            <input
              type="file"
              hidden
              accept=".csv, .xls, .xlsx"
              {...register("file")}
              onChange={handleFileChange}
            />
          </Button>
          {errors.file && (
            <Typography color="error">{errors.file.message}</Typography>
          )}
          <TextField
            error={errors?.scheduleTime?.message ? true : false}
            label="Schedule Time"
            type="datetime-local"
            variant="outlined"
            fullWidth
            helperText={errors?.scheduleTime?.message}
            {...register("scheduleTime")}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained" type="submit" fullWidth sx={{ py: 1.5 }}>
            Create Campaign
          </Button>
        </Box>
      </Container>
    </PublicLayout>
  );
};

export default CreateCampaign;
