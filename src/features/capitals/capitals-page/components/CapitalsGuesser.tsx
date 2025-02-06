import "./CapitalsGuesser.scss";

import countryCapitals from "@src/features/capitals/data/country-capitals";
import { ChangeEvent, useState } from "react";

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const CapitalsGuesser = () => {
  const [correctCount, setCorrectCount] = useState(0);
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
      countriesUnanswered[currentCountryIndex]?.city?.toLowerCase() ===
      answer.toLowerCase()
    ) {
      setFeedback("Riktig svar!");
      setCorrectCount(correctCount + 1);
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
    setCorrectCount(0);
    setCountriesUnanswered(countryCapitals);
    getRandomInt(countryCapitals.length);
    setFeedback("");
  };

  const amountCorrectText = `Andel riktige: ${correctCount}/${countryCapitals.length}`;

  return (
    <div className="capitalsGuesser">
      <form
        className="block"
        onSubmit={(event) => {
          event.preventDefault();
          checkAnswer();
        }}
      >
        <p>Land: {countriesUnanswered[currentCountryIndex].country}</p>
        <label htmlFor="input-answer">Hovedstad:</label>
        <input id="input-answer" onChange={changeAnswer} />
        <button type="submit">Sjekk</button>
        {feedback && <p>{feedback}</p>}
      </form>
      <section className="block">
        <button onClick={nextAnswer}>Neste</button>
        <button onClick={reset}>Start på nytt</button>
      </section>

      <section className="block">
        <p>{amountCorrectText}</p>
      </section>
    </div>
  );
};

export default CapitalsGuesser;
