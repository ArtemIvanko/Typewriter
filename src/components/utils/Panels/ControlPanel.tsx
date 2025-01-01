import styled from "@/DefaultTheme";
import { Button } from "@mui/material";

interface IControlPanelProps {
  isWordsOpen?: boolean;
  isQuotesOpen?: boolean;
  handleWordsClick?: () => void;
  handleQuotesClick?: () => void;
}

export const ControlPanel = ({
  isWordsOpen,
  isQuotesOpen,
  handleWordsClick,
  handleQuotesClick,
}: IControlPanelProps) => (
  <StyledControlPanel>
    <Button
      variant={isWordsOpen ? "contained" : "text"}
      onClick={handleWordsClick}
    >
      Words
    </Button>
    <Button
      variant={isQuotesOpen ? "contained" : "text"}
      onClick={handleQuotesClick}
    >
      Quotes
    </Button>
  </StyledControlPanel>
);

const StyledControlPanel = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  backgroundColor: theme.palette.primary.bg,
  padding: "0.5rem 1rem",
}));
