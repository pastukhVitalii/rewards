import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import { BrowserRouter } from 'react-router-dom';

const firebaseConfig = {
    apiKey: "AIzaSyBgCes5l0pxzkp9wXByw0x8v0gVKt5A0bo",
    authDomain: "rewards-542d1.firebaseapp.com",
    databaseURL: "https://rewards-542d1-default-rtdb.firebaseio.com",
    projectId: "rewards-542d1",
    storageBucket: "rewards-542d1.appspot.com",
    messagingSenderId: "290727625693",
    appId: "1:290727625693:web:2fc25609c9ab6bbdef6c34"
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </BrowserRouter>,
document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
