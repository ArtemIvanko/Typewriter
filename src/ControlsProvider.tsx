import { createContext, useContext, ReactNode } from "react";
import { EmotionJSX } from "@emotion/react/dist/declarations/src/jsx-namespace";
import {
  useHandleController,
  useHandleQuoteRender,
} from "@shared/hooks/handlers";

interface QuoteHandlers {
  handleQuoteLengthClick: (length: "short" | "moderate" | "long") => void;
  handleInputChange: (value: string) => void;
  handleRestart: () => void;
  renderQuote: () => EmotionJSX.Element[] | undefined;
  userInput: string;
  isDisabled: boolean;
  results: { correct: number; incorrect: number } | null;
  quote: string | null;
}

interface TimerHandlers {
  isTimerOpen: boolean;
  timerValue: number | null;
  timeLeft: number | null;
  handleTimerClick: (value: number) => void;
}

interface DifficultyHandlers {
  isDifficultyOpen: boolean;
  handleDifficultyClick: () => void;
}

interface LengthHandlers {
  isLengthOpen: boolean;
  handleLengthClick: () => void;
}

interface ControlsContextType {
  quoteHandlers: QuoteHandlers;
  timerHandlers: TimerHandlers;
  difficultyHandlers: DifficultyHandlers;
  lengthHandlers: LengthHandlers;
  handleClick: () => void;
}

const ControlsContext = createContext<ControlsContextType | undefined>(
  undefined,
);

interface ControlsProviderProps {
  children: ReactNode;
}

export const ControlsProvider = ({ children }: ControlsProviderProps) => {
  const quoteHandlers = useHandleQuoteRender();
  const {
    isTimerOpen,
    timerValue,
    timeLeft,
    handleTimerClick,
    isDifficultyOpen,
    handleDifficultyClick,
    isLengthOpen,
    handleLengthClick,
    handleClick,
  } = useHandleController();

  return (
    <ControlsContext.Provider
      value={{
        quoteHandlers,
        timerHandlers: { isTimerOpen, timerValue, timeLeft, handleTimerClick },
        difficultyHandlers: { isDifficultyOpen, handleDifficultyClick },
        lengthHandlers: { isLengthOpen, handleLengthClick },
        handleClick,
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
};

export const useControls = (): ControlsContextType => {
  const context = useContext(ControlsContext);

  if (!context) {
    throw new Error("useControls must be used within a ControlsProvider");
  }

  return context;
};
