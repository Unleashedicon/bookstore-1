import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const AddBook = ({ addBookItem }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Fiction');
  const [message, setMessage] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      const itemId = uuidv4();
      addBookItem(itemId, title, author, category);
      setTitle('');
      setAuthor('');
      setCategory('Fiction');
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
        <select id="category" value={category} onChange={handleCategory}>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
        </select>
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
