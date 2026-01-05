import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import router from "./Routes/Router.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { ThemeProvider } from "next-themes";

createRoot(document.getElementById("root")).render(
  <ThemeProvider
    attribute="data-theme"
    defaultTheme="light"
    enableSystem={false}
  >
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </StrictMode>
  </ThemeProvider>
);
