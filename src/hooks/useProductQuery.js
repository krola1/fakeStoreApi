import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts, fetchProductDetails } from "../api/axiosFakeStore";

const useAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });
};

const useProductDetails = (id) => {
  return useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => fetchProductDetails(id),
    enabled: !!id,
  });
};

export { useAllProducts, useProductDetails };
