import queryString from 'query-string';

const URL_API = 'https://www.googleapis.com/books/v1/volumes';

const buildURL = (url, paramsObject) => {
  const paramsString = queryString.stringify(paramsObject);
  return `${url}?${paramsString}`;
};

const getBooks = async ({
  q = '',
  startIndex = 0,
  maxResults = 10,
}) => {

  const params = {
    q,
    startIndex,
    maxResults
  };

  const url = buildURL(URL_API, params);
  const response = await fetch(url);
  
  const data = await response.json();
  return data;
};

export default getBooks;