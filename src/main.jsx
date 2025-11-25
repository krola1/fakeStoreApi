import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.jsx";
import CartProvider from "./context/CartContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </CartProvider>
  </StrictMode>
);
