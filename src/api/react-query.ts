import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const queryKeys = {
  products: "products",
};

export default queryClient;
