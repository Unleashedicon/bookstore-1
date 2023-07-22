import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book, delBook }) => (
  <li>
    {book.title}
    {' '}
    -
    {book.author}
    <button onClick={() => delBook(book.item_id)} aria-label="Delete" type="button">
      Remove
    </button>
  </li>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired, // Update to "item_id"
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  delBook: PropTypes.func.isRequired,
};

export default BookItem;
