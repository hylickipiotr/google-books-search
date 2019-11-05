import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = ({searchValue, onChangeSearchValue, formSubmit}) => {
  return (
    <Form onSubmit={(e) => formSubmit(e)}>
      <Form.Group>
        <Form.Control name="query" type="text" placeholder="Search books..." value={searchValue} onChange={e => onChangeSearchValue(e.target.value)} />
      </Form.Group>

      <Button variant="success" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;
