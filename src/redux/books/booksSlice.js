import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  bookItems: [],
  status: 'idle',
  error: null,
};

const APP_ID = 'pGTcHfJQfCAeiOVP39Dp';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const BOOKS_URL = `${BASE_URL}${APP_ID}/books`;

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(BOOKS_URL);
    const bookItems = response.data;
    const books = Object.keys(bookItems).map((itemId) => ({
      item_id: itemId,
      ...bookItems[itemId][0],
    }));
    return books;
  } catch (error) {
    console.error('Error fetching books:', error.message);
    throw Error('Failed to fetch books');
  }
});

export const addBook = createAsyncThunk('books/addBook', async ({
  itemId,
  title,
  author,
  category,
}) => {
  try {
    const bookData = {
      item_id: itemId,
      title,
      author,
      category,
    };
    const response = await axios.post(BOOKS_URL, bookData);
    return response.data;
  } catch (error) {
    throw Error('Failed to add book');
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (itemId) => {
  try {
    const response = await axios.delete(`${BOOKS_URL}/${itemId}`);
    return response.data;
  } catch (error) {
    throw Error('Failed to remove book');
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const bookItems = Object.values(action.payload);
        state.status = 'succeeded';
        state.bookItems = bookItems;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.status = 'failed';
        state.error = 'Failed to fetch books';
        console.error('failed to fetch books');
      })
      .addCase(addBook.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(addBook.rejected, (state) => {
        state.error = 'Failed to add book';
      })
      .addCase(removeBook.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(removeBook.rejected, (state) => {
        state.error = 'Failed to remove book';
      });
  },
});

export default bookSlice.reducer;
