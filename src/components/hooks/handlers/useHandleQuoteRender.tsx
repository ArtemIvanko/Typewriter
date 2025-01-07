import { useCallback, useState } from "react";
import { Letter } from "@utils/Letter";
import { fetchQuotes } from "@/Api/fetchQuotes";
import { useHandleController } from "@shared/hooks/handlers/useHandleController";

export const useHandleQuoteRender = () => {
  const [quote, setQuote] = useState<string | null>(null);
  const [userInput, setUserInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [results, setResults] = useState<{
    correct: number;
    incorrect: number;
  } | null>(null);

  const { hasStartedTyping, setHasStartedTyping } = useHandleController();

  const shuffleWords = useCallback((text: string) => {
    const words = text.split(" ");
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    return words.join(" ");
  }, []);

  const handleInputChange = useCallback(
    (value: string) => {
      if (!hasStartedTyping && value.length > 0) {
        setHasStartedTyping(true);
      }

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

  const handleQuoteLengthClick = useCallback(
    (length: "short" | "moderate" | "long") => {
      let count;
      if (length === "short") {
        count = 1;
      } else if (length === "moderate") {
        count = 3;
      } else {
        count = 5;
      }

      fetchQuotes({ count, setQuote, shuffleWords });
    },
    [],
  );

  return {
    quote,
    userInput,
    isDisabled,
    results,
    handleRestart,
    renderQuote,
    handleInputChange,
    handleQuoteLengthClick,
    setIsDisabled,
  };
};
