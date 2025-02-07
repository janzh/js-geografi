import "./CapitalsGuesser.scss";

import countryCapitals from "@src/features/capitals/data/country-capitals";
import { ChangeEvent, useState } from "react";

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const CapitalsGuesser = () => {
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState<
    boolean | undefined
  >(undefined);
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
      const answerIsCorrect =
        countriesUnanswered[currentCountryIndex]?.city?.toLowerCase() ===
        answer.toLowerCase();

      if (answerIsCorrect) {
        setFeedback("Riktig svar!");
        setCorrectCount(correctCount + 1);
      } else {
        setFeedback("Feil svar!");
      }

      setIsAnsweredCorrectly(answerIsCorrect);
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
    setIsAnsweredCorrectly(undefined);
    setIsAnswered(false);
  };

  const amountGuessedText = `Andel svart: ${countryCapitals.length - countriesUnanswered.length}/${countryCapitals.length}`;
  const amountCorrectText = `Andel riktige: ${correctCount}/${countryCapitals.length}`;

  const submitButtonText = () => {
    if (isAnswered) {
      return "Fortsett";
    }

    return "Sjekk";
  };

  const getSubmitButtonColor = () => {
    if (!answer) {
      return "disabled";
    }

    if (isAnswered && !isAnsweredCorrectly) {
      return "error";
    }

    return "success";
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
        <button className={`${getSubmitButtonColor()}`} type="submit">
          {submitButtonText()}
        </button>
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
