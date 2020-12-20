import React, {useEffect, useState} from "react";
import firebase from "firebase";

type PropsType = {
    device: 'mobile' | 'desktop'
    active: boolean
}

export const Timer = React.memo((props: PropsType) => {

    const [seconds, setSeconds] = useState<number | undefined>();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                const db = firebase.database();
                const ref = db.ref(`users/${user.uid}/time/${props.device}`);
                ref.on('value', (snapshot) => {
                    console.log(snapshot.val());
                    setSeconds(snapshot.val());
                });
            }
        })
    }, [])

    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        if (props.active) {
            let interval: any = null;
            interval = setInterval(() => {
                // @ts-ignore
                setSeconds(seconds + 1);
            }, 1000);
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    const db = firebase.database();
                    db.ref(`users/${user.uid}/time/${props.device}`).transaction(function () {
                        return seconds
                        // return `${hours} : ${minutes} : ${seconds}`
                    }).catch(error => console.log(error));

                    console.log('your data written to db');
                }
            })

            return () => clearInterval(interval);
        }
    }, [seconds, setSeconds]);

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