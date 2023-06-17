import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from '../routes/categories';
import Books from '../routes/Books';
import NotMatch from '../routes/NotMatch';
import Layout from './Layout';

const BookApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Books />} />
      <Route path="categories" element={<Categories />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);

export default BookApp;
