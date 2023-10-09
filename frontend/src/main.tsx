import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import Store from "./redux/Store";
import { Provider } from "react-redux";
import "./root.scss";
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  // </React.StrictMode>
);
