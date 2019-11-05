import React, { useState }from 'react';
import { Container, Button } from 'react-bootstrap';

import CardList from './components/CardList';
import SearchForm from './components/SearchForm';

import './App.css';

const App = () => {
  const URL_API = 'https://www.googleapis.com/books/v1/volumes?q=';
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [amount, setAmount] = useState(10);
  const [loadedItems, setLoadedItems] = useState(0);
  const [totalItems, setTotalItems] = useState(0);



  const getBooks = async (serchTerm ,startPoint = 0, amount = 10) => {
    const response = await fetch(`${URL_API}${serchTerm}&startIndex=${startPoint}`);
    const data = await response.json();
    return data;
  };

  const loadBooks = async () => {
    const { totalItems, items }  = await getBooks(query);
    setTotalItems(totalItems);
    setLoadedItems(items.length);
    setBooks([...items]);
  };

  const loadMoreBooks = async () => {
    const { totalItems, items } = await getBooks(query, loadedItems, amount);
    setTotalItems(totalItems);
    setLoadedItems(loadedItems+items.length);
    setBooks([...books, ...items]);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    loadBooks();
  };

  return (
    <div className='App'>
      <Container>
        <h1>Google Boooks Searcher <span role='img' aria-label='books'>📚</span></h1>
        <SearchForm searchValue={query} onChangeSearchValue={setQuery} formSubmit={submitSearch}/>
        <hr/>
        {loadedItems ? <h3>Results: {loadedItems}/{totalItems}</h3> : ''}
        <CardList books={books}/>
        {books.length && loadedItems < totalItems ? <Button onClick={() => loadMoreBooks()}>Load more...</Button> : ''}
      </Container>
    </div>
  );
};

export default App;
