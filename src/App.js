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
  const [queryError, setQueryError] = useState('');

  const loadBooks = () => getBooks({
      q: query, 
      maxResults: amount
    }).then(({totalItems, items}) => {
      setTotalItems(totalItems);
      setLoadedItems(items ? items.length : 0);
      setBooks(items ? [...items] : []);
    });
  
  const loadMoreBooks = () => getBooks({
      q: query, 
      maxResults: amount,
      startIndex: loadedItems
    }).then(({totalItems, items}) => {
      setTotalItems(totalItems);
      setLoadedItems(loadedItems+items.length);
      setBooks([...books, ...items]);
    });

  const submitSearch = (e) => {
    e.preventDefault();
    if(!query.length) {
      setQueryError('Query can\'t by empt');
      return;
    }  
    setQueryError('');
    loadBooks();
  };

  return (
    <div className='App'>
      <Container>
        <h1>Google Boooks Searcher <span role='img' aria-label='books'>📚</span></h1>
        <SearchForm 
          searchValue={query} 
          onChangeSearchValue={setQuery}
          searchInputError={queryError}
          amountOpitonValue={amount}
          onChangeAmountOpiton={setAmount}
          formSubmit={submitSearch}
          
        />
        <hr/>
        {loadedItems ? <span className="text-muted">Results: {loadedItems}/{totalItems}</span> : ''}
        <CardList books={books}/>
        {books.length && loadedItems < totalItems ? <Button onClick={() => loadMoreBooks()}>Load more...</Button> : ''}
      </Container>
    </div>
  );
};

export default App;
