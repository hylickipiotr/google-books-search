import React, { useState }from 'react';
import { Container, Button } from 'react-bootstrap';

import getBooks from './helpers/googleBooksAPI';

import CardList from './components/CardList';
import SearchForm from './components/SearchForm';

import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [amount, setAmount] = useState(10);
  const [loadedItems, setLoadedItems] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const loadBooks = async () => {
    const { totalItems, items }  = await getBooks(query, undefined, amount);
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
        <SearchForm 
          searchValue={query} 
          onChangeSearchValue={setQuery}
          amountOpitonValue={amount}
          onChangeAmountOpiton={setAmount}
          formSubmit={submitSearch}  
        />
        <hr/>
        {loadedItems ? <h3>Results: {loadedItems}/{totalItems}</h3> : ''}
        <CardList books={books}/>
        {books.length && loadedItems < totalItems ? <Button onClick={() => loadMoreBooks()}>Load more...</Button> : ''}
      </Container>
    </div>
  );
};

export default App;
