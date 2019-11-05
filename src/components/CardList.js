import React from 'react';
import BookCard from './BookCard';

const CardList = ({ books }) => {
  return (
    <div className="mt-4">
      {books.map((book) => 
        <BookCard 
          key={book.id} 
          thumbnailURL={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''} 
          title={book.volumeInfo.title} 
          description={book.volumeInfo.description} 
          url={book.volumeInfo.canonicalVolumeLink} 
        />
      )}
    </div>
  );
};

export default CardList;
