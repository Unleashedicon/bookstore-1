import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ addBookItem }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      addBookItem(title, author);
      setTitle('');
      setAuthor('');
      setMessage('');
    } else {
      setMessage('Please add item');
    }
  };

  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          id="input-title"
          placeholder="Book Title"
          value={title}
          onChange={handleTitle}
          className="Input-title"
        />
        <input
          type="text"
          id="input-Author"
          placeholder="Author"
          value={author}
          onChange={handleAuthor}
          className="Input-Author"
        />
        <button type="submit" className="input-submit">Submit</button>
      </form>
      <span className="Submit-warning">{message}</span>
    </>
  );
};

AddBook.propTypes = {
  addBookItem: PropTypes.func.isRequired,
};

export default AddBook;
