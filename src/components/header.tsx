import { Button, Input } from "@nextui-org/react";
import { Search, ShoppingCart } from "lucide-react";
import { useQueryState } from "nuqs";
import { ChangeEvent } from "react";
import { useDebouncedCallback } from "use-debounce";

const Header = () => {
  const [search, setSearch] = useQueryState("search");

  const handleSearch = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    250
  );

  return (
    <div className="container flex items-center justify-between p-4">
      <a href="/">
        <h1 className="uppercase font-bold text-2xl">Ecommerce</h1>
      </a>
      <div className="flex gap-4 items-center">
        <Input
          onChange={handleSearch}
          defaultValue={search || ""}
          placeholder="Search..."
          endContent={<Search />}
        />
        <Button variant="light">
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Header;
