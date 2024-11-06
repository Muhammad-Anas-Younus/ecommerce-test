import useGetProducts from "../../api/products/use-get-products";
import ProductCard from "../../components/product-card";

const Home = () => {
  const { data } = useGetProducts();

  console.log(data, "data");

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-4 gap-10 py-10">
      {data &&
        data?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );
};

export default Home;
