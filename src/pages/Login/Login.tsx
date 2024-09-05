import RenderForms from "../../features/renderForms";
import { signup } from "../../forms/signupForm";

export default function Login() {
  return (
    <RenderForms forms={signup} />
  );
};
