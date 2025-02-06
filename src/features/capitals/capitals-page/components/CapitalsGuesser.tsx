import "./CapitalsGuesser.scss";

import countryCapitals from "@src/features/capitals/data/country-capitals";
import { ChangeEvent, useState } from "react";

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const CapitalsGuesser = () => {
  const [isAnswered, setIsAnswered] = useState(false);
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

  const nextAnswer = () => {
    const newCountriesUnanswered = [...countriesUnanswered].filter(
      (_, index) => index !== currentCountryIndex,
    );

    if (newCountriesUnanswered.length) {
      setCurrentCountryIndex(getRandomInt(newCountriesUnanswered.length));
      setCountriesUnanswered(newCountriesUnanswered);
    } else {
      setFeedback("Du har svart på alle verdens land");
    }

    setAnswer("");
    setIsAnswered(false);
  };

  const checkAnswer = () => {
    if (!isAnswered) {
      if (
        countriesUnanswered[currentCountryIndex]?.city?.toLowerCase() ===
        answer.toLowerCase()
      ) {
        setFeedback("Riktig svar!");
        setCorrectCount(correctCount + 1);
      } else {
        setFeedback("Feil svar!");
      }

      setIsAnswered(true);
    } else {
      nextAnswer();
    }
  };

  const reset = () => {
    setCorrectCount(0);
    setCountriesUnanswered(countryCapitals);
    getRandomInt(countryCapitals.length);
    setFeedback("");
  };

  const amountGuessedText = `Andel svart: ${countryCapitals.length - countriesUnanswered.length}/${countryCapitals.length}`;
  const amountCorrectText = `Andel riktige: ${correctCount}/${countryCapitals.length}`;

  const submitButtonText = () => {
    if (isAnswered) {
      return "Fortsett";
    }

    return "Sjekk";
  };

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
        <input id="input-answer" onChange={changeAnswer} value={answer} />
        <button type="submit">{submitButtonText()}</button>
        {feedback && <p>{feedback}</p>}
      </form>
      <section className="block">
        <p>{amountGuessedText}</p>
        <p>{amountCorrectText}</p>
      </section>
      <section className="block">
        <button onClick={reset}>Start på nytt</button>
      </section>
    </div>
  );
};

export default CapitalsGuesser;
