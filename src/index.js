import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProviders } from './context/AuthProviders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <AuthProviders>

        <App />
    </AuthProviders>

);
