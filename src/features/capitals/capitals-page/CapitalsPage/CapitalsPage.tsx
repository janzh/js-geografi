import "./CapitalsPage.scss";

import CapitalsGuesser from "@src/features/capitals/capitals-page/components/CapitalsGuesser";

const CapitalsPage = () => (
  <div className="capitalsPage">
    <h1>Gjett landets hovedstad</h1>

    <CapitalsGuesser />
  </div>
);

export default CapitalsPage;
