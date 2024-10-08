import { Input } from "@mui/material";
import CustomBtn from "../../customComponents/Button/Button";
import React from "react";
import { login } from "../../services/authService";
import { useToast } from "../../hooks/toaster";
import { useNavigate } from "react-router";
import { capitalize, get } from "lodash";

const initialState = {
  email: ''
};

export default function Login() {
  const { showToast } = useToast();
  const router = useNavigate();
  const [ user, setUser ] = React.useState(initialState);
  const [ loading, setLoading ] = React.useState(false);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setUser((ps: any) => ({
      ...ps,
      [name]: value
    }))
  }

  async function handleSubmit() {
    console.log(user);
    try {
      setLoading(true);
      const response = await login(user);
      console.log(response);
      if (response.status === 200) {
        setLoading(false);
        showToast(capitalize(get(response, 'data.message', '')), "success");
        localStorage.setItem('token', get(response, 'data.token', ''));
        router('/', { replace: true });
      }
    } catch (error) {
      setLoading(false);
      showToast("Login failed", "error");
    } finally {
      setLoading(false);
    }
  }

  const gotoSignup = () => {
    router('/signup');
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Input 
          className="reg-input" 
          name="email" type="text" placeholder="Email" onChange={handleChange} value={user.email} />
        <CustomBtn primary={true} click={handleSubmit} type={"light"}>
          {loading ? 'Loading...' : 'Login'}
        </CustomBtn>
        <p className="redirect-link">New user? <span className="link" onClick={gotoSignup}>Signup</span></p>
      </form>
    </div>
  );
}
