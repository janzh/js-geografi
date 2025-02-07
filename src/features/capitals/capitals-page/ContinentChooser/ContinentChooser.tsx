import "./ContinentChooser.scss";

import countryCapitals, {
  Continent,
  CountryCapital,
} from "@src/features/capitals/data/country-capitals";
import { ChangeEvent, useState } from "react";

interface ContinentChooserOption {
  countries: CountryCapital[];
  label: string;
}

const options: ContinentChooserOption[] = [
  {
    countries: [...countryCapitals],
    label: "Alle",
  },
  {
    countries: [...countryCapitals].filter(
      (countryCapital) => Continent.AFRICA === countryCapital.continent,
    ),
    label: "Afrika",
  },
  {
    countries: [...countryCapitals].filter(
      (countryCapital) => Continent.AMERICA === countryCapital.continent,
    ),
    label: "Amerika",
  },
  {
    countries: [...countryCapitals].filter(
      (countryCapital) => Continent.ASIA === countryCapital.continent,
    ),
    label: "Asia",
  },
  {
    countries: [...countryCapitals].filter(
      (countryCapital) => Continent.EUROPE === countryCapital.continent,
    ),
    label: "Europa",
  },
  {
    countries: [...countryCapitals].filter(
      (countryCapital) => Continent.OCEANIA === countryCapital.continent,
    ),
    label: "Oseania",
  },
];

interface Props {
  submit: (countries: CountryCapital[]) => void;
}

const ContinentChooser = ({ submit }: Props) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOptionIndex(Number(event.target.value));
  };

  return (
    <form
      className="continentChooser block"
      onSubmit={(event) => {
        event.preventDefault();
        submit(options[selectedOptionIndex].countries);
      }}
    >
      {options.map((option, index) => (
        <label key={option.label}>
          <input
            checked={selectedOptionIndex === index}
            onChange={handleOnChange}
            type="radio"
            value={index}
          />
          {option.label}
        </label>
      ))}
      <div>
        <button className="blue" type="submit">
          Velg
        </button>
      </div>
    </form>
  );
};

export default ContinentChooser;
