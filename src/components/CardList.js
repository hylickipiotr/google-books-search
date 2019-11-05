import React from 'react'
import { CardColumns } from 'react-bootstrap';
import BookCard from './BookCard';

const CardList = ({ books }) => {
  return (
    <div>
      <CardColumns>
        {books.map((book) => 
          <BookCard 
            key={book.id} 
            thumbnailURL={book.volumeInfo.imageLinks.thumbnail} 
            title={book.volumeInfo.title} 
            description={book.volumeInfo.description} 
            url={book.volumeInfo.canonicalVolumeLink} 
          />
        )}
      </CardColumns>
    </div>
  )
}

export default CardList
