import React, {useCallback, useState} from "react";
import {Input} from "../../components/common/input/Input";
import {Button} from "../../components/common/button/Button";

export const Register = React.memo(() => {

    console.log('register page');

    const [firsName, setFirsName] = useState('Vitaliy');
    const [lastName, setLastName] = useState('Pastukh');
    const [email, setEmail] = useState('pastuh3@gmail.com');
    const [pass, setPass] = useState('!Asd1234');

    const setFirstNameCallback = useCallback((e) => {
        setFirsName(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }, []);

    const setLastNameCallback = useCallback((e) => {
        setLastName(e.currentTarget.value)
    }, []);

    const setEmailCallback = useCallback((e) => {
        setEmail(e.currentTarget.value)
    }, []);

    const setPasswordCallback = useCallback((e) => {
        setPass(e.currentTarget.value)
    }, []);

    return (
        <>
            <div>
                Register
                <Input type={''} placeholder={'First name'} value={firsName} onChange={setFirstNameCallback}/>
                <Input type={''} placeholder={'Last name'} value={lastName} onChange={setLastNameCallback}/>
                <Input type={''} placeholder={'e-mail'} value={email} onChange={setEmailCallback}/>
                <Input type={''} placeholder={'password'} value={pass} onChange={setPasswordCallback}/>
                <Button type={''} name={'Register'} spiner={false} disable={false} onClick={() => alert('ss')}/>
            </div>
        </>
    );
});