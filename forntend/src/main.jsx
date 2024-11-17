import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToastContainer position="top-center" autoClose={1000} />
  </>
);
