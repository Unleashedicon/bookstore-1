import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="Wrapper">
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
