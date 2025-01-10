import countryCapitals from "@src/features/capitals/data/country-capitals";
import { ChangeEvent, useState } from "react";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const CapitalsGuesser = () => {
  const [countriesUnanswered, setCountriesUnanswered] =
    useState(countryCapitals);
  const [currentCountryIndex, setCurrentCountryIndex] = useState(
    getRandomInt(countriesUnanswered.length),
  );

  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

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

  const next = () => {
    if (countriesUnanswered.length) {
      setCurrentCountryIndex(getRandomInt(countriesUnanswered.length));
    } else {
      setFeedback("Du har svart på alle verdens land");
    }
  };

  const reset = () => {
    setCountriesUnanswered(countryCapitals);
    setFeedback("");
  };

  return (
    <div>
      <div>
        <p>Land: {countriesUnanswered[currentCountryIndex].country}</p>
        <label htmlFor="input-answer">Hovedstad:</label>
        <input
          id="input-answer"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setAnswer(event.target.value)
          }
        />
        {feedback && <div>{feedback}</div>}
        <button onClick={() => checkAnswer()}>Sjekk</button>
      </div>
      <div>
        <button onClick={() => next()}>Neste</button>
        <button onClick={() => reset()}>Start på nytt</button>
      </div>
    </div>
  );
};

export default CapitalsGuesser;
