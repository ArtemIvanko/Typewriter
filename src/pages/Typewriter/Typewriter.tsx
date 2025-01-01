import { useState, useEffect} from "react";
import { getQuotes } from "@/Api/getQuotes";
import { TextField } from "@mui/material";
import styled from "@/DefaultTheme";

export const Typewriter = () => {
  const [quote, setQuote] = useState<string | null>(null);
  const [userInput, setUserInput] = useState("");
  
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
  
  if (!quote) {
    return <p>Loading...</p>;
  }
  
  const renderQuote = () => {
    return quote?.split("").map((char: string, index: number) => {
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
      Typewriter
      <p>{renderQuote()}</p>
      <TextField label="Type here" multiline fullWidth maxRows={8} variant="filled" />
    </div>
  );
};

const Letter = styled("span")<{ $isCorrect: boolean; $isTyped: boolean }>(({ $isCorrect, $isTyped, theme }) => ({
  color: !$isTyped ? theme.palette.text.primary : $isCorrect ? theme.palette.success.main : theme.palette.error.main,
}))