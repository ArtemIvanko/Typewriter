import { EmotionJSX } from "@emotion/react/dist/declarations/src/jsx-namespace";
import { createContext, useContext } from "react";
import { useHandleQuoteRender } from "@shared/hooks/handlers";

interface ControlsContextType {
  handleQuoteLengthClick: (length: "short" | "moderate" | "long") => void;
  handleInputChange: (value: string) => void;
  handleRestart: () => void;
  userInput: string;
  isDisabled: boolean;
  results: { correct: number; incorrect: number } | null;
  quote: string | null;
  renderQuote: () => EmotionJSX.Element[] | undefined;
}

const ControlsProvider = createContext<ControlsContextType | undefined>(
  undefined,
);

export const ControlsContext = ({ children }: any) => {
  const {
    handleQuoteLengthClick,
    renderQuote,
    handleInputChange,
    handleRestart,
    userInput,
    isDisabled,
    results,
    quote,
  } = useHandleQuoteRender();

  return (
    <ControlsProvider.Provider
      value={{
        handleQuoteLengthClick,
        handleInputChange,
        handleRestart,
        userInput,
        isDisabled,
        results,
        quote,
        renderQuote,
      }}
    >
      {children}
    </ControlsProvider.Provider>
  );
};

export const useControls = () => {
  const context = useContext(ControlsProvider);

  if (context === undefined) {
    throw new Error("useControls must be used within a ControlsProvider");
  }

  return context;
};
