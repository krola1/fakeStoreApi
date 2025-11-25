import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts, fetchProductDetails } from "../api/axiosFakeStore";


const useAllProducts =()=>{
    return useQuery({
        queryKey:"",
        queryFn
}