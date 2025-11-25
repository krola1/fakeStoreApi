import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Products from "../pages/Products.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import Cart from "../pages/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>an error ocured</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "*", element: <h1>404 not found</h1> },
    ],
  },
]);

export { router };
