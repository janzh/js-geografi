import RoutePaths from "@src/application/router/routesPaths";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h2>Geografi</h2>
    <Link to={`/${RoutePaths.CAPITALS}`}>Hovedsteder</Link>
  </div>
);

export default HomePage;
