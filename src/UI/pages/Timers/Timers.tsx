import React from "react";

type PropsType = {}
export const Timers = React.memo((props: PropsType) => {

    console.log('timers page');

    return (
        <>
            <div>
                Timers
            </div>
        </>
    );
});