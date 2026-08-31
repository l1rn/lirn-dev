import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import './styles/globals.scss'
import { Provider } from 'react-redux';
import { ThemeProvider } from "./ThemeProvider";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);