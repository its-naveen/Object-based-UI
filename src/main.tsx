import { createRoot } from "react-dom/client";
import './styles/app.scss';
import App from "./App";

const root = document.getElementById('root') as HTMLElement;
createRoot(root).render(
  <App />
);
