import { useQuery } from "@tanstack/react-query";
import apiClient from "..";
import { queryKeys } from "../react-query";

export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

const useGetProducts = () => {
  const data = useQuery({
    queryKey: [queryKeys.products],
    queryFn: async () => (await apiClient.get("/products")).data as IProduct[],
  });
  return data;
};

export default useGetProducts;
