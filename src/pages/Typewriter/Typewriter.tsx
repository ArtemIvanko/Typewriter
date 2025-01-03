import { Button, Typography, TextField } from "@mui/material";
import styled from "@/DefaultTheme";
import { useControls } from "@/ControlsProvider";

export const Typewriter = () => {
  const { quoteHandlers, timerHandlers } = useControls();

  const {
    quote,
    userInput,
    handleInputChange,
    results,
    handleRestart,
    isDisabled,
    renderQuote,
  } = quoteHandlers;

  const { setHasStartedTyping, hasStartedTyping } = timerHandlers;

  const handleTyping = (value: string) => {
    if (!hasStartedTyping) {
      setHasStartedTyping(true);
    }

    handleInputChange(value);
  };

  return (
    <div>
      <div>{renderQuote()}</div>
      {quote && (
        <TextField
          label="Type here"
          multiline
          fullWidth
          maxRows={8}
          variant="filled"
          onChange={(e) => handleTyping(e.target.value)}
          value={userInput}
          disabled={isDisabled}
        />
      )}
      {results && quote && (
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
