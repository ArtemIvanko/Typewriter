import { TextField, Button, Typography } from "@mui/material";
import { useHandleQuoteRender } from "@shared/hooks/handlers";
import styled from "@/DefaultTheme";

export const Typewriter = () => {
  const {
    quote,
    userInput,
    handleInputChange,
    handleRestart,
    results,
    isDisabled,
    renderQuote,
  } = useHandleQuoteRender();

  if (!quote) {
    return <p>Loading...</p>;
  }

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

const Results = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  background: theme.palette.secondary.main,
}));
