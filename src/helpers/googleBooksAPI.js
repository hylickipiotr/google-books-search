import queryString from 'query-string';

const URL_API = 'https://www.googleapis.com/books/v1/volumes';

const buildURL = (url, paramsObject) => {
  const paramsString = queryString.stringify(paramsObject);
  return `${url}?${paramsString}`;
};

const getBooks = ({
  q = '',
  startIndex = 0,
  maxResults = 10,
}) => {
  
  const url = buildURL(URL_API, {
    q,
    startIndex,
    maxResults
  });

  return new Promise(async (resolve, reject) => {
    const response = await fetch(url);
    const data = await response.json();
    resolve(data);
  });
};

export default getBooks;