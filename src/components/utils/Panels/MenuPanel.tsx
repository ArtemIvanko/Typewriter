import styled from "@/DefaultTheme";
import { Button, Typography } from "@mui/material";
import { Bumper } from "@utils/Bumper";

interface MenuPanelProps {
  isOpen: boolean;
}

export const MenuPanel = ({ isOpen }: MenuPanelProps) => (
  <StyledMenuPanel>
    <MenuButton variant="outlined">
      <Typography variant="subtitle2">
        {isOpen ? "Time" : "Something"}
      </Typography>
    </MenuButton>
    <Bumper />
    <MenuButton>
      <Typography variant="subtitle2">
        {isOpen ? "Length" : "Something"}
      </Typography>
    </MenuButton>
    <Bumper />
    <MenuButton>
      <Typography variant="subtitle2">
        {isOpen ? "Difficulty" : "Something"}
      </Typography>
    </MenuButton>
  </StyledMenuPanel>
);

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
