import useGetProducts from "../../api/products/use-get-products";

const Home = () => {
  const { data } = useGetProducts();

  console.log(data?.data, "data");

  return <div>Home</div>;
};

export default Home;
