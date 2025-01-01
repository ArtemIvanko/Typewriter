import { useState, useEffect } from "react";
import { getQuotes } from "@/Api/getQuotes";
import { TextField } from "@mui/material";

export const Typewriter = () => {
  const [quote, setQuote] = useState<string | null>(null);
  
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
  
  return (
    <div>
      Typewriter
      <p>quotes</p>
      <TextField label="Type here" multiline fullWidth maxRows={8} variant="filled" />
    </div>
  );
};
