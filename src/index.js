import React from 'react';
import ReactDOM from 'react-dom/client';
import AboutPage from './components/AboutPage';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter,RouterProvider,Route} from "react-router-dom";



const router = createBrowserRouter([
  {
    path : '/',
    element: < App />,
  },
  {
    path: '/AboutPage',
    element: < AboutPage />,
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
