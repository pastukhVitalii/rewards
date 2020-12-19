import React, {useEffect, useState} from "react";
import firebase from "firebase";

type PropsType = {}
export const Timers = React.memo((props: PropsType) => {

    console.log('timers page');

    const [firsName, setFirsName] = useState();

    useEffect( () => {
        // const displayName = firebase.auth().currentUser?.displayName;
        getCurrentUsername()
    });
    const getCurrentUsername = () => {
        console.log(firebase.auth().currentUser);
        console.log(firebase.auth().currentUser?.displayName);
        return firebase.auth().currentUser && firebase.auth().currentUser?.displayName;
    }

    return (
        <>
            <div>
                <div>{firebase.auth().currentUser?.displayName}</div>
                Timers
            </div>
        </>
    );
});