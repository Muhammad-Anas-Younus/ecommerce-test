import { useQuery } from "@tanstack/react-query";
import apiClient from "..";
import { queryKeys } from "../react-query";

const useGetProducts = () => {
  const data = useQuery({
    queryKey: [queryKeys.products],
    queryFn: () => apiClient.get("/products"),
  });
  return data;
};

export default useGetProducts;
