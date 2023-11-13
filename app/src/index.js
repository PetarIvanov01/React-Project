import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/fonts.css'
import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from './styles/GlobalStyle.style';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <App />
        </BrowserRouter>
    </StrictMode>
);
