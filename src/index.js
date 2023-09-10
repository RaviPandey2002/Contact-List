// import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')

);
