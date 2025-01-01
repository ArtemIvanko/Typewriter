import { Typography } from "@mui/material";
import JSLogo from "@assets/images/js-logo.webp";
import styled from "@/DefaultTheme";

export const Navigation = () => (
  <NavigationContainer>
    <LogoContainer>
      <LogoNameContainer>
        <Typography variant="h2">Creative</Typography>
        <Typography variant="caption">JavaScript</Typography>
      </LogoNameContainer>
      <LogoImageContainer>
        <LogoImage src={JSLogo} alt="JS Logo" />
      </LogoImageContainer>
    </LogoContainer>
    <ControlPanel>
      <Typography variant="button">Home</Typography>
      <Typography variant="button">About</Typography>
      <Typography variant="button">Contact</Typography>
    </ControlPanel>
  </NavigationContainer>
);

const NavigationContainer = styled("div")({
  display: "flex",
  width: "100%",
  flexDirection: "column",
});

const LogoNameContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "0 1rem",
});

const LogoImageContainer = styled("div")({
  position: "relative",
  width: "100px",
  height: "100px",
});

const LogoImage = styled("img")({
  position: "absolute",
  top: 5,
  left: -20,
  width: "100%",
  height: "100%",
});

const ControlPanel = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  backgroundColor: theme.palette.primary.bg,
  padding: "0.5rem 1rem",
}));
