// booklist.js
import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ books, delBook }) => {
  console.log('Received books:', books);
  console.log('Type of books:', typeof books);

  return (
    <ul>
      {books.map((book) => (
        <BookItem key={book.item_id} book={book} delBook={delBook} />
      ))}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  delBook: PropTypes.func.isRequired,
};

export default BookList;
