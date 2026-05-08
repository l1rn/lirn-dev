import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import './styles/globals.scss'
import { ThemeProvider } from "./ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);