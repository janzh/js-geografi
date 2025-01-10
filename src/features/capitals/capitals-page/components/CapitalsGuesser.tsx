import "./CapitalsGuesser.scss";

import countryCapitals from "@src/features/capitals/data/country-capitals";
import { ChangeEvent, useState } from "react";

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const CapitalsGuesser = () => {
  const [countriesUnanswered, setCountriesUnanswered] =
    useState(countryCapitals);
  const [currentCountryIndex, setCurrentCountryIndex] = useState(
    getRandomInt(countriesUnanswered.length),
  );

  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const changeAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
    setFeedback("");
  };

  const checkAnswer = () => {
    if (
      countriesUnanswered[currentCountryIndex].city.toLowerCase() ===
      answer.toLowerCase()
    ) {
      setFeedback("Riktig svar!");
    } else {
      setFeedback("Feil svar!");
    }
  };

  const nextAnswer = () => {
    if (countriesUnanswered.length) {
      setCurrentCountryIndex(getRandomInt(countriesUnanswered.length));
    } else {
      setFeedback("Du har svart på alle verdens land");
    }
  };

  const reset = () => {
    setCountriesUnanswered(countryCapitals);
    getRandomInt(countryCapitals.length);
    setFeedback("");
  };

  return (
    <div className="capitalsGuesser">
      <section className="block">
        <p>Land: {countriesUnanswered[currentCountryIndex].country}</p>
        <label htmlFor="input-answer">Hovedstad:</label>
        <input id="input-answer" onChange={changeAnswer} />
        <button onClick={checkAnswer}>Sjekk</button>
        {feedback && <p>{feedback}</p>}
      </section>
      <section className="block">
        <button onClick={nextAnswer}>Neste</button>
        <button onClick={reset}>Start på nytt</button>
      </section>
    </div>
  );
};

export default CapitalsGuesser;
