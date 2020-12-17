import React, {useCallback, useEffect, useState} from "react";
import {Input} from "../../components/common/input/Input";
import {Button} from "../../components/common/button/Button";
import firebase from "firebase";
import {Redirect} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    setAuth: (isAuth: boolean) => void
    /*redirect: boolean
    setRedirect: (redirect: boolean) => void*/
}

export const Login = React.memo((props: PropsType) => {

    console.log('registered page');

    const [redirect, setRedirect] = useState<boolean>(false);

    useEffect(() => {
        if (props.isAuth && !redirect) setTimeout(() => setRedirect(true), 500);
    }, [props.isAuth, redirect])

    const [email, setEmail] = useState('test@gmail.com');
    const [pass, setPass] = useState('test1234');

    const setEmailCallback = useCallback((e) => {
        setEmail(e.currentTarget.value)
    }, []);

    const setPasswordCallback = useCallback((e) => {
        setPass(e.currentTarget.value)
    }, []);

    const signInCallback = useCallback(() => {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(res => {
                props.setAuth(true);
            })
            .catch(error => console.log(error))
    }, [props.setAuth, email, pass]);

    console.log(props.isAuth)

    if (redirect && props.isAuth) return <Redirect to={'/timers'}/>;

    return (
        <>
            <div>
                Login
                <div>{props.isAuth ? 'You are authorized' : ''}</div>
                <Input type={''} placeholder={'e-mail'} value={email} onChange={setEmailCallback}/>
                <Input type={''} placeholder={'password'} value={pass} onChange={setPasswordCallback}/>
                <Button type={''} name={'Register'} spiner={false} disable={false} onClick={signInCallback}/>
            </div>
        </>
    );
});