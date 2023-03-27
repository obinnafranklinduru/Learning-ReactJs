import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppContext from './tutorial/09-context-api/starter/Global/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppContext>
            <App />
        </AppContext>
    </React.StrictMode>
);