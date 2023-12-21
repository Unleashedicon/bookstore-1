// booklogic.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, addBook, removeBook } from '../redux/books/booksSlice';
import AddBook from './Addbook';
import BookList from './Booklist';

const BookLogic = () => {
  const books = useSelector((state) => state.book.bookItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const addBookItem = (itemId, title, author, category) => {
    dispatch(addBook({
      itemId,
      title,
      author,
      category,
    }))
      .then(() => {
        dispatch(fetchBooks());
      })
      .catch((error) => {
        console.error('Failed to add book:', error);
      });
  };

  const delBook = (itemId) => {
    dispatch(removeBook(itemId))
      .then(() => {
        dispatch(fetchBooks());
      })
      .catch((error) => {
        console.error('Failed to remove book:', error);
      });
  };

  return (
    <div>
      <BookList books={books} delBook={delBook} />
      <AddBook addBookItem={addBookItem} />
    </div>
  );
};

export default BookLogic;
