import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SearchForm = ({searchValue, onChangeSearchValue, amountOpitonValue, onChangeAmountOpiton, formSubmit, searchInputError}) => {
  
  const clearQueryInput = () => {
    onChangeSearchValue('');
  };

  return (
    <Form onSubmit={(e) => formSubmit(e)}>
      <Form.Group>
        <InputGroup>
          <Form.Control 
            name="query"
            type="text"
            size="lg"
            placeholder="Search books..."
            value={searchValue}
            onChange={e => onChangeSearchValue(e.target.value)}
          />
          <InputGroup.Append>
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={clearQueryInput}>
                <FontAwesomeIcon icon={faTimes} /><span> Clear</span>
              </Button>
            </InputGroup.Append>
          </InputGroup.Append>
        </InputGroup>
        {searchInputError.length && !searchValue.length ? <Form.Text className="text-danger">{searchInputError}</Form.Text> : null}
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
