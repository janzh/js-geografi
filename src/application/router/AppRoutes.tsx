import RoutePaths from "@src/application/router/routesPaths";
import CapitalsPage from "@src/features/capitals/capitals-page/CapitalsPage/CapitalsPage";
import HomePage from "@src/features/home/HomePage/HomePage";
import { Navigate, RouteObject } from "react-router-dom";

const AppRoutes: RouteObject[] = [
  {
    path: RoutePaths.HOME,
    element: <HomePage />,
  },
  {
    path: RoutePaths.CAPITALS,
    element: <CapitalsPage />,
  },
  {
    path: "*",
    element: <Navigate to={`${RoutePaths.HOME}`} replace />,
  },
];

export default AppRoutes;
