import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ books, delBook }) => (
  <ul>
    {books.map((book) => (
      <BookItem key={book.id} book={book} delBook={delBook} />
    ))}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  delBook: PropTypes.func.isRequired,
};

export default BookList;
