import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import Home from "./screens/home/Home";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
