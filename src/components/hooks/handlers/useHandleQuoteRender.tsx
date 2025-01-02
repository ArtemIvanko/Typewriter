import { ChangeEvent, useCallback, useState } from "react";
import { getQuotes } from "@/Api/getQuotes";
import { Letter } from "@utils/Letter";

export const useHandleQuoteRender = () => {
  const [quote, setQuote] = useState<string | null>(null);
  const [userInput, setUserInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [results, setResults] = useState<{
    correct: number;
    incorrect: number;
  } | null>(null);

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

  const handleRestart = useCallback(() => {
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
  }, []);

  const renderQuote = useCallback(() => {
    return quote?.split("").map((char: string, index: number) => {
      const isCorrect = userInput[index] === char;
      const isTyped = index < userInput.length;

      return (
        <Letter
          key={index}
          isCorrect={isCorrect}
          isTyped={isTyped}
          char={char}
        />
      );
    });
  }, [quote, userInput]);

  return {
    quote,
    userInput,
    isDisabled,
    results,
    handleInputChange,
    handleRestart,
    renderQuote,
    setQuote,
  };
};
