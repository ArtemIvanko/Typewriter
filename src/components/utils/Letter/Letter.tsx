import styled from "@/DefaultTheme";

interface LetterProps {
  char: string;
  isCorrect: boolean;
  isTyped: boolean;
}

export const Letter = ({ char, isCorrect, isTyped }: LetterProps) => (
  <StyledLetter $isCorrect={isCorrect} $isTyped={isTyped}>
    {char}
  </StyledLetter>
);

const StyledLetter = styled("span")<{ $isCorrect: boolean; $isTyped: boolean }>(
  ({ $isCorrect, $isTyped, theme }) => ({
    color: !$isTyped
      ? theme.palette.text.primary
      : $isCorrect
        ? theme.palette.secondary.bg
        : theme.palette.warning.main,
    fontSize: "1.5rem",
  }),
);
