import React, { useState }from 'react';
import { Container, Button } from 'react-bootstrap'

import CardList from './components/CardList';
import SearchForm from './components/SearchForm';

import './App.css'

const App = () => {
  const URL_API = 'https://www.googleapis.com/books/v1/volumes?q=';
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [amount, setAmount] = useState(10);
  const [startIndex, setStartIndex] = useState(0);
  const [loadedItems, setLoadedItems] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const loadBooks = async () => {
    const response = await fetch(`${URL_API}${query}&startIndex=${startIndex}`);
    const data = await response.json();

    setTotalItems(data.totalItems);
    setStartIndex(startIndex+amount);
    setLoadedItems(loadedItems+data.items.length);
    setBooks([...books, ...data.items]);
  }

  const submitSearch = (e) => {
    e.preventDefault();
    
    setTotalItems(0);
    setStartIndex(0);
    setLoadedItems(0);
    setBooks([]);

    loadBooks()
  }

  return (
    <div className='App'>
      <Container>
        <h1>Google Boooks Searcher <span role='img' aria-label='books'>📚</span></h1>
        <SearchForm searchValue={query} onChangeSearchValue={setQuery} formSubmit={submitSearch}/>
        <hr/>
        {loadedItems ? <h3>Results: {loadedItems}/{totalItems}</h3> : ''}
        <CardList books={books}/>
        {books.length ? <Button onClick={() => loadBooks()}>Load more...</Button> : ''}
      </Container>
    </div>
  );
}

export default App;
