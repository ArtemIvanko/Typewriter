import { useCallback, useEffect, useState } from "react";

export const useHandleController = () => {
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [isLengthOpen, setIsLengthOpen] = useState(false);
  const [isDifficultyOpen, setIsDifficultyOpen] = useState(false);
  const [timerValue, setTimerValue] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  const handleTimerClick = useCallback((value: number) => {
    setTimerValue(value);
    setTimeLeft(value);
    setHasStartedTyping(false);
  }, []);

  const handleClick = useCallback(() => {
    setIsTimerOpen(!isTimerOpen);
  }, [isTimerOpen]);

  const handleLengthClick = useCallback(() => {
    setIsLengthOpen(!isLengthOpen);
  }, [isLengthOpen]);

  const handleDifficultyClick = useCallback(() => {
    setIsDifficultyOpen(!isDifficultyOpen);
  }, [isDifficultyOpen]);

  useEffect(() => {
    if (hasStartedTyping && timeLeft !== null && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prev) => (prev !== null ? prev - 1 : null));
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft, hasStartedTyping]);

  return {
    isTimerOpen,
    isLengthOpen,
    isDifficultyOpen,
    timerValue,
    timeLeft,
    handleTimerClick,
    handleClick,
    handleLengthClick,
    handleDifficultyClick,
    setHasStartedTyping,
    hasStartedTyping,
  };
};
