import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          fontSize: "16px",
          padding: "16px",
          minWidth: "300px",
        },

        error: {
          style: {
            background: "maroon",
            color: "#fff",
          },
        },
      }}
    />
  </>
);
