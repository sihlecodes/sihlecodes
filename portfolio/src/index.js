import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const hide = (e) => e.style.display = 'none';

window.addEventListener('load', () => hide(document.querySelector('.loader')));

root.render(
  <React.StrictMode>
    <div className="loader"></div>
    <App />
  </React.StrictMode>
);