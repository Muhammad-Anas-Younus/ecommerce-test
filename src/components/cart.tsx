import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import useAppSelector from "../hooks/useAppSelector";
import CartProduct from "./cart-product";

interface PropTypes {
  variant?: "cart" | "checkout";
  productContainerClassName?: string;
}

export default function Cart({
  variant = "cart",
  productContainerClassName,
}: PropTypes) {
  const productsInCart = useAppSelector((state) => state.cart.products);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  return (
    <>
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className={twMerge("overflow-auto", productContainerClassName)}>
        {productsInCart.length > 0 ? (
          <div className="space-y-10">
            {productsInCart.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p>No Products in the cart</p>
        )}
      </div>
      {productsInCart.length > 0 && (
        <div className="mt-10">
          <p className="mb-4">Total Price: ${totalPrice.toFixed(2)}</p>
          {variant === "cart" && (
            <Link to="/checkout">
              <Button color="primary" className="w-full">
                Checkout
              </Button>
            </Link>
          )}
        </div>
      )}
    </>
  );
}
