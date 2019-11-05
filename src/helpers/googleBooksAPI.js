const URL_API = 'https://www.googleapis.com/books/v1/volumes?q=';

const getBooks = async (serchTerm ,startPoint = 0, amount = 10) => {
  const response = await fetch(`${URL_API}${serchTerm}&startIndex=${startPoint}&maxResults=${amount}`);
  const data = await response.json();
  return data;
};

export default getBooks;