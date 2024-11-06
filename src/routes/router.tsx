import { Route, Routes } from "react-router-dom";
import Home from "./app/home";

const routes = [
  {
    path: "/",
    component: Home,
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
