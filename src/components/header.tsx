import { Button, Input, useDisclosure } from "@nextui-org/react";
import { Search, ShoppingCart } from "lucide-react";
import { useQueryState } from "nuqs";
import { ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import useAppSelector from "../hooks/useAppSelector";
import Cart from "./cart";
import Drawer from "./drawer";

const Header = () => {
  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onOpenChange: onCartOpenChange,
  } = useDisclosure();
  const [search, setSearch] = useQueryState("search");

  const cart = useAppSelector((state) => state.cart);

  const { pathname } = useLocation();

  const handleSearch = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    250
  );

  return (
    <>
      <div className="container flex items-center justify-between p-4">
        <a href="/">
          <h1 className="uppercase font-bold text-2xl">Ecommerce</h1>
        </a>
        {pathname !== "/checkout" && (
          <div className="flex gap-4 items-center">
            <Input
              onChange={handleSearch}
              defaultValue={search || ""}
              placeholder="Search..."
              endContent={<Search />}
            />
            <Button onClick={onCartOpen} variant="light">
              <ShoppingCart />{" "}
              {cart.products.length > 0 && cart.products.length}
            </Button>
          </div>
        )}
      </div>
      <Drawer
        className="p-4 space-y-4"
        onOpenChange={onCartOpenChange}
        isOpen={isCartOpen}
      >
        <Cart />
      </Drawer>
    </>
  );
};

export default Header;
