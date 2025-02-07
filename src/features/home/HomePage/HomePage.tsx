import RoutePaths from "@src/application/router/routesPaths";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h1>Geografi</h1>
    <Link to={`/${RoutePaths.CAPITALS}`}>Hovedsteder</Link>
  </div>
);

export default HomePage;
