import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import AddBook from './Addbook';
import BookList from './Booklist';

const BookLogic = () => {
  const books = useSelector((state) => state.book.bookItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('books', JSON.stringify(books));
    }
  }, [books]);

  const delBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  const addBookItem = (title, author) => {
    dispatch(addBook({ title, author }));
  };

  return (
    <div>
      <BookList books={books} delBook={delBook} />
      <AddBook addBookItem={addBookItem} />
    </div>
  );
};

export default BookLogic;
