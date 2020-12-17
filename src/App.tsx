import React, {useEffect} from 'react';
import './App.css';
import firebase from "firebase/app";
import 'firebase/database';

function App() {

    useEffect(() => {
        const db = firebase.database();
        console.log(db)
    })

    return (
        <div className="App">

        </div>
    );
}

export default App;
