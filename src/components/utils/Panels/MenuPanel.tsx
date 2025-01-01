import styled from "@/DefaultTheme";
import { Button, Typography } from "@mui/material";
import { Bumper } from "@utils/Bumper";
import { useCallback, useEffect, useState } from "react";
import { MenuSubButton } from "@utils/Buttons";

interface MenuPanelProps {
  isOpen: boolean;
}

export const MenuPanel = ({ isOpen }: MenuPanelProps) => {
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [isLengthOpen, setIsLengthOpen] = useState(false);
  const [isDifficultyOpen, setIsDifficultyOpen] = useState(false);
  const [timerValue, setTimerValue] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  const handleTimerClick = useCallback((value: number) => {
    setTimerValue(value);
    setTimeLeft(value);
  }, []);

  const handleClick = useCallback(() => {
    setIsTimerOpen(!isTimerOpen);
  }, [isTimerOpen]);

  const handleLengthClick = useCallback(() => {
    setIsLengthOpen(!isLengthOpen);
  }, [isLengthOpen]);

  const handleDifficultyClick = useCallback(() => {
    setIsDifficultyOpen(!isDifficultyOpen);
  }, [isDifficultyOpen]);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(null);
    }

    if (timeLeft) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

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
          <MenuSubButton onClick={() => console.log("123")} value="Short" />
          <MenuSubButton onClick={() => console.log("123")} value="Moderate" />
          <MenuSubButton onClick={() => console.log("123")} value="Long" />
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
