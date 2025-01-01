import styled from "@/DefaultTheme";
import { Outlet as RootOutlet } from "react-router-dom";
import { Typography } from "@mui/material";
import JSLogo from "src/assets/images/js-logo.webp";

export const Outlet = () => (
  <Root>
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
    <Content>
      <RootOutlet />
    </Content>
    <div>Footer</div>
  </Root>
);

const Root = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  height: "100vh",
})

const NavigationContainer = styled("div")({
  display: "flex",
  width: "100%",
  flexDirection: "column",
})

const LogoNameContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
})

const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "0 1rem",
})

const LogoImageContainer = styled("div")({
  position: "relative",
  width: "100px",
  height: "100px",
})

const LogoImage = styled("img")({
  position: "absolute",
  top: 5,
  left: -20,
  width: "100%",
  height: "100%",
})

const ControlPanel = styled("div")({
  display: "flex",
  gap: "1rem",
  backgroundColor: "#f0f0f0",
  padding: "0.5rem 1rem",
})

const Content = styled("div")({
  padding: "1rem 2rem",
  height: "100%",
})