import React from "react";
import {NavLink} from "react-router-dom";
import './Header.scss'

export const Header = React.memo(() => {
    return (
        <header>
            <NavLink to={'/login'} activeClassName={'activeLink'}> Sign in </NavLink>
            <NavLink to={'/register'}> Sign up </NavLink>
            <NavLink to={'/timers'}> Timers</NavLink>
        </header>
    );
})