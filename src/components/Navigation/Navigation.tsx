import { Typography } from "@mui/material";
import JSLogo from "@assets/images/js-logo.webp";
import styled from "@/DefaultTheme";
import { ControlPanel, MenuPanel } from "@utils/Panels";
import { useHandleMenuController } from "@shared/hooks/handlers";

export const Navigation = () => {
  const { isQuotesOpen, isWordsOpen, handleWordsClick, handleQuotesClick } =
    useHandleMenuController();

  return (
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
      <ControlPanel
        isWordsOpen={isWordsOpen}
        isQuotesOpen={isQuotesOpen}
        handleWordsClick={handleWordsClick}
        handleQuotesClick={handleQuotesClick}
      />
      {isWordsOpen && <MenuPanel isOpen={isWordsOpen} />}
      {isQuotesOpen && <MenuPanel isOpen={isWordsOpen} />}
    </NavigationContainer>
  );
};

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
