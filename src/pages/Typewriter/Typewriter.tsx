import { Button, Typography, TextField } from "@mui/material";
import { useHandleQuoteRender } from "@shared/hooks/handlers";
import styled from "@/DefaultTheme";

export const Typewriter = () => {
  const {
    renderQuote,
    handleInputChange,
    handleRestart,
    userInput,
    isDisabled,
    results,
    quote,
    handleQuoteLengthClick,
  } = useHandleQuoteRender();

  return (
    <div>
      <ButtonContainer>
        <Button onClick={() => handleQuoteLengthClick("short")}>Short</Button>
        <Button onClick={() => handleQuoteLengthClick("moderate")}>
          Moderate
        </Button>
        <Button onClick={() => handleQuoteLengthClick("long")}>Long</Button>
      </ButtonContainer>
      <div>{renderQuote()}</div>
      {quote && (
        <TextField
          label="Type here"
          multiline
          fullWidth
          maxRows={8}
          variant="filled"
          onChange={(e) => handleInputChange(e.target.value)}
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

const ButtonContainer = styled("div")({
  display: "flex",
  gap: "1rem",
  marginBottom: "1rem",
});

const Results = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  background: theme.palette.secondary.main,
}));
