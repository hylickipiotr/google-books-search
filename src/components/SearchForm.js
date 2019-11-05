import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = ({searchValue, onChangeSearchValue, amountOpitonValue, onChangeAmountOpiton, formSubmit}) => {
  return (
    <Form onSubmit={(e) => formSubmit(e)}>
      <Form.Group>
        <Form.Control 
          name="query" 
          type="text" 
          size="lg" 
          placeholder="Search books..." 
          value={searchValue} 
          onChange={e => onChangeSearchValue(e.target.value)} 
        />
      </Form.Group>

      <Form.Group >
        <Form.Label>Amount of loading</Form.Label>
        <Form.Control 
          as="select"
          value={amountOpitonValue} 
          onChange={(e) => onChangeAmountOpiton(e.target.value)}
        >
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
        </Form.Control>
      </Form.Group>

      <Button variant="success" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;
