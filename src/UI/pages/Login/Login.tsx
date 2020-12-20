import React, {useCallback, useState} from "react";
import {Input} from "../../components/common/input/Input";
import {Button} from "../../components/common/button/Button";
import firebase from "firebase";
import {NavLink, withRouter} from "react-router-dom";
import '../../../App.scss';


type PropsType = {
    setAuth: (isAuth: boolean) => void
    history: any
}

const Login = React.memo((props: any) => {

    console.log('registered page');


    const [email, setEmail] = useState('test077@gmail.com');
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

    return (
        <>
            <div className={'main'}>
                <div className={'title'}>Login</div>
                <div className={'form'}>
                    <Input type={''} placeholder={'Email'} value={email} onChange={setEmailCallback}/>
                    <Input type={''} placeholder={'Password'} value={pass} onChange={setPasswordCallback}/>
                </div>
                <Button type={''} name={'Login'} spinner={false} disable={false} onClick={signInCallback}/>
                <div className={'secondary_title'}>Don’t have an account yet? <NavLink className={'link'}
                                                                                       to={'/register'}> Register</NavLink>
                </div>
            </div>
        </>
    );
});

export default withRouter(Login)