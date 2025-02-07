import "./ContinentChooser.scss";

import countryCapitals, {
  Continent,
  CountryCapital,
} from "@src/features/capitals/data/country-capitals";
import { ChangeEvent, useState } from "react";

type ContinentOption = Continent | "ALL";

interface ContinentChooserOption {
  continentOptions: ContinentOption;
  label: string;
}

const options: ContinentChooserOption[] = [
  {
    continentOptions: "ALL",
    label: "Alle",
  },
  {
    continentOptions: Continent.AFRICA,
    label: "Afrika",
  },
  {
    continentOptions: Continent.AMERICA,
    label: "Amerika",
  },
  {
    continentOptions: Continent.ASIA,
    label: "Asia",
  },
  {
    continentOptions: Continent.EUROPE,
    label: "Europa",
  },
  {
    continentOptions: Continent.OCEANIA,
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

  const handleSubmit = () => {
    const continentOption = options[selectedOptionIndex].continentOptions;

    if (continentOption === "ALL") {
      submit([...countryCapitals]);
      return;
    }

    const countries = [...countryCapitals].filter(
      (countryCapital) => continentOption === countryCapital.continent,
    );

    submit(countries);
  };

  return (
    <form className="continentChooser block" onSubmit={handleSubmit}>
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
