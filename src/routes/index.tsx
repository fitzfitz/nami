import React from "react";

const Home = React.lazy(() => import("@nami/pages/Home"));
const Filter = React.lazy(() => import("@nami/pages/Filter"));

export type RoutesType = {
  path: string;
  component: React.ReactNode;
  title?: string;
  children?: RoutesType[];
};

const routes = [
  {
    path: "/",
    component: <Home />,
    title: "Home",
  },
  {
    path: "/filter",
    component: <Filter />,
    title: "Filter",
  },
];

export default routes;
