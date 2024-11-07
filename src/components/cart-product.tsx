import { Button } from "@nextui-org/react";
import {
  addProductToCart,
  decrementQuantity,
  IProductExtended,
  removeProductFromCart,
} from "../store/slices/cart";
import useAppDispatch from "../hooks/useAppDispatch";

const CartProduct = ({ product }: { product: IProductExtended }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-4">
      <img
        className="w-32 h-32 object-contain"
        src={product.image}
        alt={product.title}
      />
      <div className="w-56 space-y-4">
        <p>{product.title}</p>
        <div className="flex items-center gap-4">
          <Button
            onClick={() =>
              dispatch(addProductToCart({ ...product, quantity: 1 }))
            }
            size="sm"
          >
            +
          </Button>
          <p>{product.quantity}</p>
          <Button
            onClick={() => dispatch(decrementQuantity(product))}
            size="sm"
          >
            -
          </Button>
        </div>
        <p>Price: ${(product.price * product.quantity).toFixed(2)}</p>
        <Button
          onClick={() => dispatch(removeProductFromCart(product))}
          color="danger"
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartProduct;
