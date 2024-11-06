import { Button, Input } from "@nextui-org/react";
import { Search, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <div className="container flex items-center justify-between p-4">
      <h1 className="uppercase font-bold text-2xl">Ecommerce</h1>
      <div className="flex gap-4 items-center">
        <Input placeholder="Search..." endContent={<Search />} />
        <Button variant="light">
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Header;
