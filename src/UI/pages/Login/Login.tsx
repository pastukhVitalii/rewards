import React, {useCallback, useState} from "react";
import {Input} from "../../components/common/input/Input";
import {Button} from "../../components/common/button/Button";
import firebase from "firebase";
import {withRouter} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    setAuth: (isAuth: boolean) => void
    history: any
}

const Login = React.memo((props: any) => {

    console.log('registered page');


    const [email, setEmail] = useState('tytest077@gmail.com');
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
            }).then(props.history.replace('/timers'))
            .catch(error => console.log(error))
    }, [props.setAuth, email, pass]);

    console.log(props.isAuth)

    return (
        <>
            <div>
                Login
                <div>{props.isAuth ? 'You are authorized' : ''}</div>
                <Input type={''} placeholder={'e-mail'} value={email} onChange={setEmailCallback}/>
                <Input type={''} placeholder={'password'} value={pass} onChange={setPasswordCallback}/>
                <Button type={''} name={'Register'} spinner={false} disable={false} onClick={signInCallback}/>
            </div>
        </>
    );
});

export default withRouter(Login)