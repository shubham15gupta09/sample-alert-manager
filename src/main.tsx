import ReactDOM from "react-dom/client";
import App from "./App";
import { AlertContextProvider } from "./hooks/useAlert";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AlertContextProvider>
    <App />
  </AlertContextProvider>
);
