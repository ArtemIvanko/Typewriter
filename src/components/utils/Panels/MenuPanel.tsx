import styled from "@/DefaultTheme";
import { Button, Typography } from "@mui/material";
import { Bumper } from "@utils/Bumper";
import { useCallback, useState } from "react";
import { MenuSubButton } from "@utils/Buttons";

interface MenuPanelProps {
  isOpen: boolean;
}

export const MenuPanel = ({ isOpen }: MenuPanelProps) => {
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [isLengthOpen, setIsLengthOpen] = useState(false);
  const [isDifficultyOpen, setIsDifficultyOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsTimerOpen(!isTimerOpen);
  }, [isTimerOpen]);

  const handleLengthClick = useCallback(() => {
    setIsLengthOpen(!isLengthOpen);
  }, [isLengthOpen]);

  const handleDifficultyClick = useCallback(() => {
    setIsDifficultyOpen(!isDifficultyOpen);
  }, [isDifficultyOpen]);

  return (
    <StyledMenuPanel>
      <MenuButton variant="outlined" onClick={handleClick}>
        <Typography variant="subtitle2">
          {isOpen ? "Timer" : "Something"}
        </Typography>
      </MenuButton>
      {isTimerOpen && (
        <SubPanel>
          <MenuSubButton onClick={() => console.log("123")} value="15" />
          <MenuSubButton onClick={() => console.log("123")} value="30" />
          <MenuSubButton onClick={() => console.log("123")} value="60" />
          <MenuSubButton onClick={() => console.log("123")} value="120" />
        </SubPanel>
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
