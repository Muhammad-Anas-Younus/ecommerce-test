import { Button } from "@nextui-org/react";
import { ShoppingCart } from "lucide-react";
import { IProduct } from "../api/products/use-get-products";
import useAppDispatch from "../hooks/useAppDispatch";
import { addProductToCart } from "../store/slices/cart";

const ProductCard = ({ product }: { product: IProduct }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addProductToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="shadow-xl rounded-lg space-y-10 p-4 max-w-full">
      <img className="w-full h-56 object-contain" src={product?.image} />
      <h1 className="text-xl truncate break-words font-semibold">
        {product?.title}
      </h1>
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">$ {product?.price?.toFixed(2)}</p>
        <Button
          onClick={handleAddToCart}
          color="primary"
          startContent={<ShoppingCart />}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
