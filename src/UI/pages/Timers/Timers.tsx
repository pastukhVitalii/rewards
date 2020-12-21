import React, {useCallback} from "react";
import {Timer} from "./Timer";
import firebase from "firebase";
import './Timers.scss';
import {withRouter} from "react-router-dom";

const Timers = React.memo((props: any) => {

    const logOutCallback = useCallback(() => {
        firebase.auth().signOut()
            .then((res) => {

            })
            .then(props.history.replace('/login'))
            .catch(error => console.log(error))
    }, [props.history]);

    const active = props.width < 760;
    console.log(active);
    return (
        <div className={'timer_page'}>
            <Timer active={!active} device={'desktop'} title={'Desktop'}/>
            <Timer active={active} device={'mobile'} title={'Mobile'}/>
            <span className={'log_out'} onClick={logOutCallback}>Log out</span>
        </div>
    )
});
export default withRouter(Timers);
