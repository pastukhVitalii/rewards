import React, {useEffect, useState} from "react";
import firebase from "firebase";

type PropsType = {
    active: boolean
}
export const Timer = React.memo((props: PropsType) => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        if (props.active) {
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
            const db = firebase.database();
            db.ref('times').transaction(function () {
                return `${hours} : ${minutes} : ${seconds}`
            })
            console.log('your data written to db');
            return () => clearInterval(interval);
        }
    }, [seconds]);

    console.log(props.active)
    return (
        <div>
            <span>{hours}</span>
            <span>:</span>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
        </div>
    )
})