import { useCallback, useEffect, useState } from "react";

export const useHandleController = () => {
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [isLengthOpen, setIsLengthOpen] = useState(false);
  const [isDifficultyOpen, setIsDifficultyOpen] = useState(false);
  const [timerValue, setTimerValue] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  const handleTimerClick = useCallback((value: number) => {
    setTimerValue(value);
    setTimeLeft(value);
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
    if (timeLeft === 0) {
      setTimeLeft(0);
    }

    if (timeLeft) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

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
  };
};
