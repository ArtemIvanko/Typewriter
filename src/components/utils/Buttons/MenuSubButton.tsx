import { Button, ButtonProps, Typography } from "@mui/material";
import styled from "@/DefaultTheme";

interface TimerButtonProps extends ButtonProps {
  onClick: () => void;
  value: string;
}

export const MenuSubButton = ({
  onClick,
  value,
  ...restProps
}: TimerButtonProps) => {
  return (
    <SubButton variant="outlined" onClick={onClick} {...restProps}>
      <Typography variant="body1">{value}</Typography>
    </SubButton>
  );
};

const SubButton = styled(Button)(({ theme }) => ({
  background: theme.palette.warning.main,
}));
