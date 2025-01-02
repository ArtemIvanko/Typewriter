import { getQuotes } from "@/Api/getQuotes";

interface IQuoteProps {
  count: number;
  setQuote: (quote: string) => void;
}

export const fetchQuotes = async ({ count, setQuote }: IQuoteProps) => {
  try {
    const fetchedQuotes = [];
    for (let i = 0; i < count; i++) {
      const data = await getQuotes();
      fetchedQuotes.push(data.content);
    }

    setQuote(fetchedQuotes.join(" "));
  } catch (err) {
    console.error(err);
  }
};
