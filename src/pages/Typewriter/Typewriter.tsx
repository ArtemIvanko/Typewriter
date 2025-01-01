import { useState, useEffect, ChangeEvent, useCallback } from "react";
import { getQuotes } from "@/Api/getQuotes";
import { TextField, Button, Typography } from "@mui/material";
import styled from "@/DefaultTheme";

export const Typewriter = () => {
  const [quote, setQuote] = useState<string | null>(null);
  const [userInput, setUserInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [results, setResults] = useState<{
    correct: number;
    incorrect: number;
  } | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const data = await getQuotes();
        setQuote(data.content);
      } catch (err) {
        console.error(err);
      }
    };

    fetchQuote();
  }, []);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setUserInput(value);

      if (value.length === quote?.length) {
        setIsDisabled(true);

        const correctChars = value
          .split("")
          .filter((char, index) => char === quote[index]).length;
        const incorrectChars = value.length - correctChars;

        setResults({
          correct: correctChars,
          incorrect: incorrectChars,
        });
      }
    },
    [quote],
  );

  const handleRestart = () => {
    setUserInput("");
    setIsDisabled(false);
    setResults(null);
    setQuote(null);

    const fetchQuote = async () => {
      try {
        const data = await getQuotes();
        setQuote(data.content);
      } catch (err) {
        console.error(err);
      }
    };
    fetchQuote();
  };

  if (!quote) {
    return <p>Loading...</p>;
  }

  const renderQuote = () => {
    return quote.split("").map((char: string, index: number) => {
      const isCorrect = userInput[index] === char;
      const isTyped = index < userInput.length;

      return (
        <Letter key={index} $isCorrect={isCorrect} $isTyped={isTyped}>
          {char}
        </Letter>
      );
    });
  };

  return (
    <div>
      <div>{renderQuote()}</div>
      <TextField
        label="Type here"
        multiline
        fullWidth
        maxRows={8}
        variant="filled"
        onChange={handleInputChange}
        value={userInput}
        disabled={isDisabled}
      />
      {results && (
        <Results>
          <Typography variant="h4">
            Correct: {results.correct} (
            {((results.correct / quote.length) * 100).toFixed(2)}%)
          </Typography>
          <Typography variant="h4">
            Incorrect: {results.incorrect} (
            {((results.incorrect / quote.length) * 100).toFixed(2)}%)
          </Typography>
          <Button variant="contained" onClick={handleRestart} fullWidth>
            Restart
          </Button>
        </Results>
      )}
    </div>
  );
};

const Letter = styled("span")<{ $isCorrect: boolean; $isTyped: boolean }>(
  ({ $isCorrect, $isTyped, theme }) => ({
    color: !$isTyped
      ? theme.palette.text.primary
      : $isCorrect
        ? theme.palette.secondary.bg
        : theme.palette.warning.main,
    fontSize: "1.5rem",
  }),
);

const Results = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  background: theme.palette.secondary.main,
}));
