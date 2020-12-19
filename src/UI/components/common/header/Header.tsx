import React from "react";
import {NavLink} from "react-router-dom";
import './Header.scss'

type PropsType = {
    isAuth: boolean
}
export const Header = React.memo((props: PropsType) => {
    return (
        <header>
            <NavLink to={'/login'} activeClassName={'activeLink'}> Sign in </NavLink>
            <NavLink to={'/register'}> Sign up </NavLink>
            <NavLink to={'/timers'}> Timers</NavLink>
            <div>{props.isAuth? 'Hello': ''}</div>
        </header>
    );
})