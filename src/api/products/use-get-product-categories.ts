import { useQuery } from "@tanstack/react-query";
import apiClient from "..";
import { queryKeys } from "../react-query";

const useGetProductCategories = () => {
  const data = useQuery({
    queryKey: [queryKeys.productCategories],
    queryFn: async () =>
      (await apiClient.get("/products/categories")).data as string[],
  });
  return data;
};

export default useGetProductCategories;
