import styled from "@/DefaultTheme";

export const Footer = () => <StyledFooter>Footer</StyledFooter>;

const StyledFooter = styled("div")(({ theme }) => ({
  background: theme.palette.primary.main,
}));
