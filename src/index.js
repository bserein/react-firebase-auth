import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';//importing my  styles
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';//importing bootstrap styles
import { BrowserRouter } from "react-router-dom";
// these bars you see in the left it shows what we added
ReactDOM.render(
  <React.StrictMode> 
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

