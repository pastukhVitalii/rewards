import React, {useCallback, useEffect, useState} from "react";
import {Input} from "../../components/common/input/Input";
import {Button} from "../../components/common/button/Button";
import firebase from "firebase";
import {withRouter} from "react-router-dom";

const Register = React.memo((props: any) => {

    console.log('register page');

    useEffect(() => {
        const db = firebase.database();
        console.log(db)
    })

    const [firsName, setFirsName] = useState('Vitaliy');
    const [lastName, setLastName] = useState('Pastukh');
    const [email, setEmail] = useState('test077@gmail.com');
    const [pass, setPass] = useState('test1234');

    const setFirstNameCallback = useCallback((e) => {
        setFirsName(e.currentTarget.value)
        console.log('name', e.currentTarget.value)
    }, []);

    const setLastNameCallback = useCallback((e) => {
        setLastName(e.currentTarget.value)
    }, []);

    const setEmailCallback = useCallback((e) => {
        setEmail(e.currentTarget.value)
    }, []);
    console.log(email);
    const setPasswordCallback = useCallback((e) => {
        setPass(e.currentTarget.value)
    }, []);

    const signUpCallback = () => {
        const name = {
            firsName,
            lastName,
            time: {
                desktop: 0,
                mobile: 0
            }
            /*desktop: {
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                },
                mobile: {
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                }*/
        }
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(res => firebase.auth().currentUser?.updateProfile({
                displayName: `${firsName} ${lastName}`
            }))
            .then(res => firebase.database().ref(`users/${firebase.auth().currentUser?.uid}`).set(name))
            .then(props.history.replace('/timers'))
            .catch((error: string) => console.log(error));
    }

    return (
        <>
            <div>
                Register
                <Input type={''} placeholder={'First name'} value={firsName} onChange={setFirstNameCallback}/>
                <Input type={''} placeholder={'Last name'} value={lastName} onChange={setLastNameCallback}/>
                <Input type={''} placeholder={'e-mail'} value={email} onChange={setEmailCallback}/>
                <Input type={''} placeholder={'password'} value={pass} onChange={setPasswordCallback}/>
                <Button type={''} name={'Register'} spinner={false} disable={false} onClick={signUpCallback}/>
            </div>
        </>
    );
});

export default withRouter(Register);