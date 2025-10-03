import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./Router/Routers.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <AuthProvider>
        <RouterProvider router={Routers}></RouterProvider>
      </AuthProvider>
    </div>
  </StrictMode>
);
