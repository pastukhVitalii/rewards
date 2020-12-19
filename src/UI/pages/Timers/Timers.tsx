import React, {useEffect, useState} from "react";
import firebase from "firebase";

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

    const [seconds, setSeconds] = useState(55);
    const [minutes, setMinutes] = useState(59);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        let interval: any = null;
        interval = setInterval(() => {
            setSeconds(seconds + 1);
        }, 1000);
        if (seconds === 60) {
            setSeconds(0);
            setMinutes(minutes + 1);
        }
        if (minutes === 60) {
            setMinutes(0);
            setHours(hours + 1);
        }
        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <div>
            <span>{hours}</span>
            <span>:</span>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
            <div>{firebase.auth().currentUser?.displayName}</div>

            {props.width < 600 ? <span>Mobile</span> : <span>Desktop</span>}
        </div>
    )
})