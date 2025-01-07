import { useCallback, useState } from "react";

export const useHandleMenuController = () => {
  const [isWordsOpen, setIsWordsOpen] = useState(false);
  const [isQuotesOpen, setIsQuotesOpen] = useState(false);

  const handleWordsClick = useCallback(() => {
    setIsWordsOpen(!isWordsOpen);
    setIsQuotesOpen(false);
  }, [isWordsOpen]);

  const handleQuotesClick = useCallback(() => {
    setIsQuotesOpen(!isQuotesOpen);
    setIsWordsOpen(false);
  }, [isQuotesOpen]);

  return {
    isWordsOpen,
    isQuotesOpen,
    handleWordsClick,
    handleQuotesClick,
  };
};
