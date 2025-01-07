import { getQuotes } from "@/Api/getQuotes";

interface IQuoteProps {
  count: number;
  setQuote: (quote: string) => void;
  shuffleWords: (quote: string) => string;
}

export const fetchQuotes = async ({
  count,
  setQuote,
  shuffleWords,
}: IQuoteProps) => {
  try {
    const fetchedQuotes = [];
    for (let i = 0; i < count; i++) {
      const data = await getQuotes();
      fetchedQuotes.push(data.content);
    }

    const concatenatedQuotes = fetchedQuotes.join(" ");
    const shuffledWords = shuffleWords(concatenatedQuotes);

    setQuote(shuffledWords);
  } catch (err) {
    console.error(err);
  }
};
