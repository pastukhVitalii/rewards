import React, {useEffect, useState} from "react";
import firebase from "firebase";

type PropsType = {
    device: 'mobile' | 'desktop'
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

    // @ts-ignore
    let hours = Math.floor(seconds / 60 / 60);

    // @ts-ignore
    let minutes = Math.floor(seconds / 60) - (hours * 60);

    // @ts-ignore
    let sec = seconds % 60;


    let timers = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        sec.toString().padStart(2, '0')
    ].join(':');

    useEffect(() => {
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

    }, [seconds, setSeconds]);

    return (
        <div>
            <div>{timers}</div>
        </div>
    )
})