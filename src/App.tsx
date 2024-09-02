import { Container } from '@mui/material'
import RenderForm from './components/RenderForm/RenderForm'
import './App.css'
import { loginForm } from './forms/login'

export default function App() {
  return (
    <Container>
      <RenderForm formFields={loginForm}/>
    </Container>
  );
};
