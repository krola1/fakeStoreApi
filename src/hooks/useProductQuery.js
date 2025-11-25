import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts, fetchProductDetails } from "../api/axiosFakeStore";

const useAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });
};

export { useAllProducts };
