import "./CapitalsPage.scss";

import CapitalsGuesser from "@src/features/capitals/capitals-page/components/CapitalsGuesser";
import ContinentChooser from "@src/features/capitals/capitals-page/ContinentChooser/ContinentChooser";
import { CountryCapital } from "@src/features/capitals/data/country-capitals";
import { useState } from "react";

const CapitalsPage = () => {
  const [chosenCountryCapitals, setChosenCountryCapitals] = useState<
    CountryCapital[]
  >([]);

  if (!chosenCountryCapitals.length) {
    return (
      <div className="capitalsPage">
        <h1>Velg verdensdel</h1>

        <ContinentChooser submit={setChosenCountryCapitals} />
      </div>
    );
  }

  return (
    <div className="capitalsPage">
      <h1>Gjett landets hovedstad</h1>
      <CapitalsGuesser countryCapitals={chosenCountryCapitals} />
      <button
        className="exit rotate-left"
        onClick={() => setChosenCountryCapitals([])}
      >
        &#10140;
      </button>
    </div>
  );
};

export default CapitalsPage;
