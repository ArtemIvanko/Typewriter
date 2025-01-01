const urlApi = "https://api.quotable.io/random";

export const getQuotes = async () => {
  const response = await fetch(urlApi);
  const {...data} = await response.json();
  return data;
};