import React, {useEffect} from 'react';
import './App.scss';
import firebase from "firebase/app";
import 'firebase/database';
import {NavLink, Route} from 'react-router-dom';
import {Login} from "./UI/pages/Login/Login";
import {Register} from "./UI/pages/Register/Register";
import {Timers} from "./UI/pages/Timers/Timers";
import {Header} from "./UI/components/common/header/Header";

function App() {

    useEffect(() => {
        const db = firebase.database();
        console.log(db)
    })

    return (
        <div className="App">
            <Header/>
            <div>
                <Route path='/' render={() => <div>
                    <NavLink to={'/login'}> Sign in </NavLink>
                    <div>or</div>
                    <NavLink to={'/register'}> Sign up </NavLink>
                </div>} exact={true}/>
                <Route path={'/login'} render={() =>
                    <Login/>}
                />
                <Route path={'/register'} render={() =>
                    <Register/>}
                />
                <Route path={'/timers'} render={() =>
                    <Timers/>}
                />
            </div>
        </div>
    );
}

export default App;
