import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book, delBook }) => (
  <li>
    {book.title}
    {' '}
    -
    {book.author}
    <button onClick={() => delBook(book.id)} aria-label="Delete" type="button">
      Remove
    </button>
  </li>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  delBook: PropTypes.func.isRequired,
};

export default BookItem;
