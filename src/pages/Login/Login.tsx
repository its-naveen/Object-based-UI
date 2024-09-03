import { Container, Typography } from "@mui/material";
import RenderForms from "../../features/renderForms";
import { signup } from "../../forms/signupForm";

export default function Login() {
  return (
    <Container maxWidth='xl'>
      <Typography variant="h4" sx={{ mb: 2 }}>Signup</Typography>
      <RenderForms forms={signup} />
    </Container>
  );
};
