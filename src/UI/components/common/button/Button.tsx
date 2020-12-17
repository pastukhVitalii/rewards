import React from 'react';
import './Button.scss';

type OwnPropTypes = {
    name: string
    type: string
    disable: boolean
    spiner?: boolean
    small?: boolean
    onClick: () => void
}
export const Button = React.memo((props: OwnPropTypes) => {
    let small = props.small? 'small': '';
    /*let loading = props.spiner === true ? <img
      src="https://media0.giphy.com/media/131tNuGktpXGhy/200w.webp?cid=ecf05e474d05d306344ab3d36c11ca3dd5479c7af938e93e&rid=200w.webp"
      alt=""/> : '';*/
    return (
        <button className={`button + ${props.type} + ${small}`} onClick={props.onClick}>
            {/*{loading}*/}
            {props.name}
        </button>
    )
})
