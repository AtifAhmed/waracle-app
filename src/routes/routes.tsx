import IRoute from "./routeTypes";

import { Suspense, lazy } from "react";

import SuspenseLoader from "components/suspenseLoader/Index";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );
const Cats = Loader(lazy(() => import("components/cats/Index")));
const AddCat = Loader(lazy(() => import("components/cats/AddCat")));

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: Cats,
    exact: true,
  },
  {
    path: "/upload",
    name: "contact",
    component: AddCat,
    exact: true,
  },
];

export default routes;
