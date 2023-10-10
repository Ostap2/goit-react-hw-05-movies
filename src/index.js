import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.css';

const root = document.getElementById('root');

const reactRoot = createRoot(root);

reactRoot.render(
  <BrowserRouter basename='goit-react-hw-05-movies/'>
    <App />
  </BrowserRouter>
);
