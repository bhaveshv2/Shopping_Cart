import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANGzZnVFPr7zX8XC_gqrg2qxD2X8usd64",
    authDomain: "cart-13902.firebaseapp.com",
    databaseURL: "https://cart-13902.firebaseio.com",
    projectId: "cart-13902",
    storageBucket: "cart-13902.appspot.com",
    messagingSenderId: "830583599462",
    appId: "1:830583599462:web:88a291768a5abcda8f58a7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />,document.getElementById('root'));
