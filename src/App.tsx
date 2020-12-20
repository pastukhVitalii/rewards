import React, {useEffect, useState} from 'react';
import './App.scss';
import 'firebase/database';
import {NavLink, Route} from 'react-router-dom';
import Login from "./UI/pages/Login/Login";
import Register from "./UI/pages/Register/Register";
import Timers from "./UI/pages/Timers/Timers";
import {Header} from "./UI/components/common/header/Header";

function App() {

    const [isAuth, setAuth] = useState<boolean>(false);
    const [width, setWidth] = useState({windowWidth: window.innerWidth});

    let handleResize = () => {
        setWidth({windowWidth: window.innerWidth})
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    })

    return (
        <div >
            <Header/>
            <div className="App">
                <Route path='/' render={() => <div>
                    <NavLink to={'/login'}> Sign in </NavLink>
                    <div>or</div>
                    <NavLink to={'/register'}> Sign up </NavLink>
                </div>} exact={true}/>
                <Route path={'/login'} render={() =>
                    <Login isAuth={isAuth} setAuth={setAuth}/>}
                />
                <Route path={'/register'} render={() =>
                    <Register/>}
                />
                <Route path={'/timers'} render={() =>
                    <Timers width={width.windowWidth}/>}
                />
            </div>
        </div>
    );
}

export default App;
