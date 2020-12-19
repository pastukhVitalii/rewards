import React, {useEffect} from "react";
import firebase from "firebase";
import {Timer} from "./Timer";

type PropsType = {
    width: number
}
export const Timers = React.memo((props: PropsType) => {

    useEffect(() => {
        getCurrentUsername();
    }, []);

    const getCurrentUsername = () => {
        return firebase.auth().currentUser && firebase.auth().currentUser?.displayName;
    }
    const active = props.width < 600;
    return (
        <div>
            <div>{firebase.auth().currentUser?.displayName}</div>
            {props.width < 600 ? <span>Mobile</span> : <span>Desktop</span>}
            <Timer active={!active}/>
            <Timer active={active}/>
        </div>
    )
})