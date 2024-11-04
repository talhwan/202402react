import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let hahah = "123";
const myElement =<h2>gogo!{hahah}</h2>;
const myElement2 =<h2>gogo!</h2>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  myElement2
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
