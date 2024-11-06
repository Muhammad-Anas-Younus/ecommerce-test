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

const useGetProducts = (category?: string) => {
  let url = "/products";
  if (category !== "") {
    url += `/category/${category}`;
  }
  const data = useQuery({
    queryKey: [queryKeys.products, category],
    queryFn: async () => (await apiClient.get(url)).data as IProduct[],
  });
  return data;
};

export default useGetProducts;
