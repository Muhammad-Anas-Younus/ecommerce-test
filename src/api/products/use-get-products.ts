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

const useGetProducts = (category?: string, search?: string) => {
  let url = "/products";
  if (category !== "") {
    url += `/category/${category}`;
  }
  const data = useQuery({
    queryKey: [queryKeys.products, category, search],
    queryFn: async () => {
      const response = await apiClient.get(url);
      const products = response.data as IProduct[];

      if (search) {
        // there is no search functionality implemented in the fakeapi i am using hence need to do searching on the frontend
        return products.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      return products;
    },
  });
  return data;
};

export default useGetProducts;
