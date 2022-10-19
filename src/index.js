import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
// import App from './Date/Appl';
import reportWebVitals from './reportWebVitals';
import './Styles/Modal.css';
import './Styles/Loadscreen.css';
import './Styles/Home.css'
import "font-awesome/css/font-awesome.css";
// import { Provider } from 'react-redux';
// import store from '../src/Toolkit_pratice/index'
// import store from './Redux/store';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import History from './Libary/History';
// import App from './Toolkit_pratice/App';
//import Profile from './Libary/Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
