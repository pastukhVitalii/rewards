import React from "react";
import {Timer} from "./Timer";

type PropsType = {
    width: number
}
export const Timers = React.memo((props: PropsType) => {

    const active = props.width < 600;
    console.log(active);
    return (
        <div>
            {props.width < 600 ? <span>Mobile</span> : <span>Desktop</span>}
            {!active ? <Timer device={props.width < 600 ? 'mobile' : 'desktop'}/> : ''}
            {active ? <Timer device={props.width < 600 ? 'mobile' : 'desktop'}/> : ''}
        </div>
    )
})