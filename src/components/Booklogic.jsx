import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddBook from './Addbook';
import BookList from './Booklist';

const BookLogic = () => {
  function getInitialBooks() {
    const storedBooks = localStorage.getItem('books');
    return storedBooks ? JSON.parse(storedBooks) : [];
  }

  const [books, setBooks] = useState(getInitialBooks());

  const delBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const addBookItem = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    setBooks([...books, newBook]);
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('books', JSON.stringify(books));
    }
  }, [books]);

  return (
    <div>
      <AddBook addBookItem={addBookItem} />
      <BookList books={books} delBook={delBook} />
    </div>
  );
};

export default BookLogic;
