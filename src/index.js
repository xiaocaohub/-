import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import IndexRouter from "./router";
import reportWebVitals from './reportWebVitals';
import "antd/dist/antd.js"; 

import {Provider} from "react-redux";
 
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        
        <IndexRouter />
    </Provider>
  </React.StrictMode>
);

 
reportWebVitals();

