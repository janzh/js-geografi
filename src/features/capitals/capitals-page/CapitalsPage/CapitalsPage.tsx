import "./CapitalsPage.scss";

import CapitalsGuesser from "@src/features/capitals/capitals-page/components/CapitalsGuesser";

const CapitalsPage = () => (
  <div className="capitalsPage">
    <h2>Hovedsteder</h2>

    <CapitalsGuesser />
  </div>
);

export default CapitalsPage;
