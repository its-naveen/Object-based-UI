import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import './styles/app.scss';
import App from "./App";

const root = document.getElementById('root') as HTMLElement;
createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
