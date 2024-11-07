import { Route, Routes } from "react-router-dom";
import Home from "./app/home";
import { Checkout } from "./app/checkout";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
];

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.component} />
      ))}
    </Routes>
  );
};

export default AppRouter;
