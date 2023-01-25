import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import {BrowserRouter} from 'react-router-dom';
import {AuthContext} from './context/AuthContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter> 
      <AuthContext>
        <App />
      </AuthContext>
    </BrowserRouter>
);

