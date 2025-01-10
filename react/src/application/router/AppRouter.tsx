import appRouterOptions from "@src/application/router/appRouterOptions";
import AppRoutes from "@src/application/router/AppRoutes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppRouter = () => (
  <RouterProvider router={createBrowserRouter(AppRoutes, appRouterOptions)} />
);

export default AppRouter;
