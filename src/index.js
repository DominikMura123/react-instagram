import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,
         RouterProvider } from 'react-router-dom';

import './index.css';
import HomePage from './components/pages/HomePage/HomePage.js';
import AddMessagePage from './components/pages/AddMessagePage/AddHomePage.js';
import About from 'components/pages/About/About.js';
import EditPage from 'components/pages/EditPage/EditPage.js'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/add',
    element: <AddMessagePage/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/edit/:id',
    element: <EditPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = { routes } />
  </React.StrictMode>
);
