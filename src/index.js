import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import MealProviders from './Pages/Context/MealProviders';
import LunchProviders from './Pages/Context/LunchProviders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LunchProviders>
      <MealProviders>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MealProviders>
    </LunchProviders>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
