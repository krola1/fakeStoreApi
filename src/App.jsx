import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { useAllProducts } from "./hooks/useProductQuery";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const { data, isLoading, isError, error } = useAllProducts();

  if (isLoading) return <h1>Loading ....</h1>;
  if (isError) return <h1>Error, could not load products{error}</h1>;
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
