import { Button, Card } from 'react-bootstrap'; 
import React, { Suspense } from 'react';


const BookCard = ({ thumbnailURL, title, desciption, url }) => {
  return (
    <Suspense fallback={'loading...'}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={thumbnailURL} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desciption}</Card.Text>
          <Button href={url} variant="primary">Show more</Button>
        </Card.Body>
      </Card>
    </Suspense>
  );
};

export default BookCard;
