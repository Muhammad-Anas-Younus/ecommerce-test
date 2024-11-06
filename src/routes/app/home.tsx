import { Select, SelectItem, Spinner } from "@nextui-org/react";
import { useQueryState } from "nuqs";
import useGetProductCategories from "../../api/products/use-get-product-categories";
import useGetProducts from "../../api/products/use-get-products";
import ProductCard from "../../components/product-card";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useQueryState("category");
  const [search] = useQueryState("search");
  const { data: products, isFetching: isProductsLoading } = useGetProducts(
    selectedCategory || "",
    search || ""
  );
  const { data: categories, isFetching: isCategoriesLoading } =
    useGetProductCategories();

  return (
    <div className="container py-10 space-y-4 ">
      {isProductsLoading || isCategoriesLoading ? (
        <div className="flex justify-center py-32 items-center">
          <Spinner />
        </div>
      ) : (
        <>
          {categories && (
            <div className="flex items-center gap-4 w-full justify-end">
              <p>Filter: </p>
              <Select
                onChange={(e) => setSelectedCategory(e.target.value)}
                label="Categories"
                className="w-40"
                defaultSelectedKeys={[selectedCategory || ""]}
              >
                {categories?.map((category) => (
                  <SelectItem key={category}>{category}</SelectItem>
                ))}
              </Select>
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 ">
            {products && products.length > 0 ? (
              products?.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
            ) : (
              <p>No Products Found</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
