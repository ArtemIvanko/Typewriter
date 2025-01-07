import styled from "@/DefaultTheme";

export const Bumper = () => <StyledBumper />;

const StyledBumper = styled("div")(({ theme }) => ({
  background: theme.palette.warning.main,
  width: "5px",
  borderRadius: "10px",
  height: "100%",
  opacity: 0.2,
}));
