import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/home/home/Home";
import Coverage from "../pages/coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: ()=> fetch("warehouses.json").then(res=> res.json())
      },
    ],
  },
]);
