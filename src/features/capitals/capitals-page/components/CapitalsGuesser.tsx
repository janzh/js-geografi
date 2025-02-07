import "./CapitalsGuesser.scss";

import ProgressBar from "@src/components/ProgressBar/ProgressBar";
import { CountryCapital } from "@src/features/capitals/data/country-capitals";
import { ChangeEvent, useState } from "react";

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

enum AnswerMode {
  UNSUBMITTED,
  SUBMITTED_CORRECT,
  SUBMITTED_WRONG,
}

interface Props {
  countryCapitals: CountryCapital[];
}

const CapitalsGuesser = ({ countryCapitals }: Props) => {
  const [answer, setAnswer] = useState("");

  const isAnswered = !!answer;

  const [answerMode, setAnswerMode] = useState(AnswerMode.UNSUBMITTED);

  const isAnsweredWrongly = AnswerMode.SUBMITTED_WRONG === answerMode;
  const isAnsweredCorrectly = AnswerMode.SUBMITTED_CORRECT === answerMode;
  const isAnswerSubmitted = isAnsweredWrongly || isAnsweredCorrectly;

  const [correctCount, setCorrectCount] = useState(0);
  const [countriesUnanswered, setCountriesUnanswered] =
    useState(countryCapitals);
  const [currentCountryIndex, setCurrentCountryIndex] = useState(
    getRandomInt(countriesUnanswered.length),
  );

  const isFinished = !countriesUnanswered.length;

  const changeAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const nextAnswer = () => {
    const newCountriesUnanswered = [...countriesUnanswered].filter(
      (_, index) => index !== currentCountryIndex,
    );

    if (newCountriesUnanswered.length) {
      setCurrentCountryIndex(getRandomInt(newCountriesUnanswered.length));
    }

    setCountriesUnanswered(newCountriesUnanswered);
    setAnswer("");
    setAnswerMode(AnswerMode.UNSUBMITTED);
  };

  const checkAnswer = () => {
    if (isAnswerSubmitted) {
      nextAnswer();
    } else {
      const answerIsCorrect =
        countriesUnanswered[currentCountryIndex]?.city?.toLowerCase() ===
        answer.toLowerCase().trim();

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
    setAnswerMode(AnswerMode.UNSUBMITTED);
  };

  const guessedAmount = countryCapitals.length - countriesUnanswered.length;
  const guessProportion = guessedAmount / countryCapitals.length;
  const correctPercentage = Math.ceil((correctCount / guessedAmount) * 100);
  const amountCorrectText = `${correctPercentage}% riktige svar`;

  const getFeedbackText = () => {
    if (isFinished) {
      return "Du har svart på alle land";
    }

    if (isAnsweredWrongly) {
      return "Feil";
    }

    if (isAnsweredCorrectly) {
      return "Riktig";
    }

    return "";
  };

  const getSubmitButtonText = () => {
    if (isAnswerSubmitted) {
      return "Fortsett";
    }

    return "Sjekk";
  };

  const getAnswerSubmitColor = () => {
    if (isFinished || !isAnswered) {
      return "disabled";
    }

    if (isAnsweredWrongly) {
      return "error";
    }

    if (isAnsweredCorrectly || isAnswered) {
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
        <ProgressBar progress={guessProportion} />
        <p>{countriesUnanswered[currentCountryIndex]?.country}</p>
        <label htmlFor="input-answer">Hovedstad:</label>
        <input id="input-answer" onChange={changeAnswer} value={answer} />
        <div className={`answer-submit ${getAnswerSubmitColor()}`}>
          {(isAnswerSubmitted || isFinished) && (
            <div className="answer-submit__feedback">
              <p>{getFeedbackText()}</p>
              {isAnsweredWrongly && (
                <small>{`Riktig svar er: ${countriesUnanswered[currentCountryIndex]?.city}`}</small>
              )}
            </div>
          )}
          <button disabled={!isAnswered || isFinished} type="submit">
            {getSubmitButtonText()}
          </button>
        </div>
      </form>
      <section className="block">
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
