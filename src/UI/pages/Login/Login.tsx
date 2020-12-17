import React, {useCallback, useState} from "react";
import {Input} from "../../components/common/input/Input";
import {Button} from "../../components/common/button/Button";

export const Login = React.memo(() => {

    console.log('registered page');

    const [email, setEmail] = useState('pastuh3@gmail.com');
    const [pass, setPass] = useState('!Asd1234');

    const setEmailCallback = useCallback((e) => {
        setEmail(e.currentTarget.value)
    }, []);

    const setPasswordCallback = useCallback((e) => {
        setPass(e.currentTarget.value)
    }, []);

    return (
        <>
            <div>
                Login
                <Input type={''} placeholder={'e-mail'} value={email} onChange={setEmailCallback}/>
                <Input type={''} placeholder={'password'} value={pass} onChange={setPasswordCallback}/>
                <Button type={''} name={'Register'} spiner={false} disable={false} onClick={() => alert('ss')}/>
            </div>
        </>
    );
});