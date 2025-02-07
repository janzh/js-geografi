import "./CapitalsGuesser.scss";

import countryCapitals from "@src/features/capitals/data/country-capitals";
import { ChangeEvent, useState } from "react";

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

enum AnswerMode {
  UNANSWERED,
  SUBMITTED_CORRECT,
  SUBMITTED_WRONG,
}

const CapitalsGuesser = () => {
  const [answerMode, setAnswerMode] = useState(AnswerMode.UNANSWERED);

  const isAnsweredWrongly = AnswerMode.SUBMITTED_WRONG === answerMode;
  const isAnsweredCorrect = AnswerMode.SUBMITTED_CORRECT === answerMode;
  const answered = isAnsweredWrongly || isAnsweredCorrect;

  const [correctCount, setCorrectCount] = useState(0);
  const [countriesUnanswered, setCountriesUnanswered] =
    useState(countryCapitals);
  const [currentCountryIndex, setCurrentCountryIndex] = useState(
    getRandomInt(countriesUnanswered.length),
  );

  const [answer, setAnswer] = useState("");

  const changeAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const nextAnswer = () => {
    const newCountriesUnanswered = [...countriesUnanswered].filter(
      (_, index) => index !== currentCountryIndex,
    );

    if (newCountriesUnanswered.length) {
      setCurrentCountryIndex(getRandomInt(newCountriesUnanswered.length));
      setCountriesUnanswered(newCountriesUnanswered);
    }

    setAnswer("");

    setAnswerMode(AnswerMode.UNANSWERED);
  };

  const checkAnswer = () => {
    if (answered) {
      nextAnswer();
    } else {
      const answerIsCorrect =
        countriesUnanswered[currentCountryIndex]?.city?.toLowerCase() ===
        answer.toLowerCase();

      if (answerIsCorrect) {
        setCorrectCount(correctCount + 1);

        setAnswerMode(AnswerMode.SUBMITTED_CORRECT);
      } else {
        setAnswerMode(AnswerMode.SUBMITTED_WRONG);
      }
    }
  };

  const reset = () => {
    setCorrectCount(0);
    setCountriesUnanswered(countryCapitals);
    getRandomInt(countryCapitals.length);

    setAnswerMode(AnswerMode.UNANSWERED);
  };

  const amountGuessedText = `Andel svart: ${countryCapitals.length - countriesUnanswered.length}/${countryCapitals.length}`;
  const amountCorrectText = `Andel riktige: ${correctCount}/${countryCapitals.length}`;

  const getFeedbackText = () => {
    if (isAnsweredWrongly) {
      return "Feil";
    }

    if (isAnsweredCorrect) {
      return "Riktig";
    }

    if (!countriesUnanswered.length) {
      return "Du har svart på alle verdens land";
    }

    return "";
  };

  const getSubmitButtonText = () => {
    if (answered) {
      return "Fortsett";
    }

    return "Sjekk";
  };

  const getAnswerSubmitColor = () => {
    if (isAnsweredWrongly) {
      return "error";
    }

    if (isAnsweredCorrect) {
      return "success";
    }

    return "disabled";
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
        <div className={`answer-submit ${getAnswerSubmitColor()}`}>
          {answered && (
            <div className="answer-submit__feedback">
              <p>{getFeedbackText()}</p>
              {isAnsweredWrongly && (
                <small>{`Riktig svar er: ${countriesUnanswered[currentCountryIndex]?.city}`}</small>
              )}
            </div>
          )}
          <button type="submit">{getSubmitButtonText()}</button>
        </div>
      </form>
      <section className="block">
        <p>{amountGuessedText}</p>
        <p>{amountCorrectText}</p>
      </section>
      <section className="block">
        <button className="blue" onClick={reset}>
          Start på nytt
        </button>
      </section>
    </div>
  );
};

export default CapitalsGuesser;
