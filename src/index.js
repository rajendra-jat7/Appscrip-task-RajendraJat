import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dataprovider from './context/Dataprovider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dataprovider>
    <App />
    </Dataprovider>
  </React.StrictMode>
);
