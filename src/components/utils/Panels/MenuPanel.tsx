import styled from "@/DefaultTheme";
import { Button, Typography } from "@mui/material";
import { Bumper } from "@utils/Bumper";
import { MenuSubButton } from "@utils/Buttons";
import { useControls } from "@/ControlsProvider";

interface MenuPanelProps {
  isOpen: boolean;
}

export const MenuPanel = ({ isOpen }: MenuPanelProps) => {
  const {
    handleClick,
    timerHandlers,
    quoteHandlers,
    difficultyHandlers,
    lengthHandlers,
  } = useControls();

  const { isTimerOpen, timerValue, timeLeft, handleTimerClick } = timerHandlers;
  const { handleQuoteLengthClick } = quoteHandlers;
  const { handleDifficultyClick, isDifficultyOpen } = difficultyHandlers;
  const { handleLengthClick, isLengthOpen } = lengthHandlers;

  return (
    <StyledMenuPanel>
      <MenuButton variant="outlined" onClick={handleClick}>
        <Typography variant="subtitle2">
          {isOpen ? "Timer" : "Something"}
        </Typography>
      </MenuButton>
      {isTimerOpen && (
        <SubPanel>
          <MenuSubButton onClick={() => handleTimerClick(15)} value="15" />
          <MenuSubButton onClick={() => handleTimerClick(30)} value="30" />
          <MenuSubButton onClick={() => handleTimerClick(60)} value="60" />
          <MenuSubButton onClick={() => handleTimerClick(120)} value="120" />
        </SubPanel>
      )}
      {timerValue && (
        <Typography variant="h6">Time Left: {timeLeft}s</Typography>
      )}
      <Bumper />
      <MenuButton onClick={handleLengthClick}>
        <Typography variant="subtitle2">
          {isOpen ? "Length" : "Something"}
        </Typography>
      </MenuButton>
      {isLengthOpen && (
        <SubPanel>
          <MenuSubButton
            onClick={() => handleQuoteLengthClick("short")}
            value="Short"
          />
          <MenuSubButton
            onClick={() => handleQuoteLengthClick("moderate")}
            value="Moderate"
          />
          <MenuSubButton
            onClick={() => handleQuoteLengthClick("long")}
            value="Long"
          />
        </SubPanel>
      )}
      <Bumper />
      <MenuButton onClick={handleDifficultyClick}>
        <Typography variant="subtitle2">
          {isOpen ? "Difficulty" : "Something"}
        </Typography>
      </MenuButton>
      {isDifficultyOpen && (
        <SubPanel>
          <MenuSubButton onClick={() => console.log("123")} value="Easy" />
          <MenuSubButton onClick={() => console.log("123")} value="Medium" />
          <MenuSubButton onClick={() => console.log("123")} value="Hard" />
        </SubPanel>
      )}
    </StyledMenuPanel>
  );
};

const StyledMenuPanel = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.warning.main,
  padding: "0.25rem 1rem",
  textTransform: "uppercase",
}));

const MenuButton = styled(Button)(({ theme }) => ({
  color: theme.palette.warning.main,
}));

const SubPanel = styled("div")({
  display: "flex",
  gap: "1rem",
});
