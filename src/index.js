import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Correctly importing BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />  {/* App is wrapped in BrowserRouter */}
    </BrowserRouter>
  </React.StrictMode>
);