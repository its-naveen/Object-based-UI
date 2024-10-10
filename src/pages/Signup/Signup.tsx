import { Input } from "@mui/material";
import CustomBtn from "../../customComponents/Button/Button";
import React from "react";
import { signup } from "../../services/authService";
import { useToast } from "../../hooks/toaster";
import { useNavigate } from "react-router";
import { capitalize, get } from "lodash";

const initialState = {
  email: '',
  username: '',
};

export default function Signup() {
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
      const response = await signup(user);
      console.log(response);
      if (response.status === 201) {
        setLoading(false);
        showToast(capitalize(get(response, 'data.message', '')), "success");
        router('/login', { replace: true });
      }
    } catch (error) {
      setLoading(false);
      showToast('Error creation', 'error');
    } finally {
      setLoading(false);
    }
  }

  const gotoLogin = () => {
    router('/login');
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <Input 
          className="reg-input" 
          name="username" type="text" placeholder="User name" onChange={handleChange} value={user.username} />
        <Input 
          className="reg-input" 
          name="email" type="text" placeholder="Email" onChange={handleChange} value={user.email} />
        <CustomBtn primary={true} click={handleSubmit} type={"light"}>
          {loading ? 'Creating...' : 'Create'}
        </CustomBtn>
        <p className="redirect-link">Existing user? <span className="link" onClick={gotoLogin}>Login</span></p>
      </form>
    </div>
  );
}
