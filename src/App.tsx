import React, {useEffect, useState} from 'react';
import './App.scss';
import 'firebase/database';
import {NavLink, Route} from 'react-router-dom';
import Login from "./UI/pages/Login/Login";
import Register from "./UI/pages/Register/Register";
import Timers from "./UI/pages/Timers/Timers";

function App() {

    const [width, setWidth] = useState({windowWidth: window.innerWidth});

    let handleResize = () => {
        setWidth({windowWidth: window.innerWidth})
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    })

    return (
        <div className="App">
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
                <Timers width={width.windowWidth}/>}
            />
        </div>
    );
}

export default App;
