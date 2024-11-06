import { Button } from "@nextui-org/react";
import { ShoppingCart } from "lucide-react";
import { IProduct } from "../api/products/use-get-products";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="shadow-xl rounded-lg space-y-10 p-4 max-w-full">
      <img className="w-full h-56 object-contain" src={product?.image} />
      <h1 className="text-xl truncate break-words font-semibold">
        {product?.title}
      </h1>
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">$ {product?.price?.toFixed(2)}</p>
        <Button color="primary" startContent={<ShoppingCart />}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
