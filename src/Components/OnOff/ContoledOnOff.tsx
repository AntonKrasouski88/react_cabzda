import React from 'react';
import s from './OnOff.module.css'

type ControledOnOffPropsType = {
    status: boolean;
    changestatus: (value: boolean) => void
}

export const ControledOnOff = (props:ControledOnOffPropsType) => {
    return (
        <div>
            <div className={s.container}>

                <div onClick={()=> {props.changestatus(true)}} className={props.status ? s.onBlockActive: s.onBlock}>On</div>
                <div onClick={()=> {props.changestatus(false)}} className={!props.status ? s.offBlockActive: s.onBlock}>Off</div>
                <div className={props.status ? s.circleGreen: s.circleRed}></div>
            </div>
            {/*{props.condition && <BlockOnOffGreen />}
            {!props.condition && <BlockOnOffRed />}*/}
        </div>
    );
};


/*
let BlockOnOffGreen = () => {
    return (
        <div className={s.container}>
            <div className = {s.onBlockActive}>On</div>
            <div className={s.onBlock}>Off</div>
            <div className={s.circleGreen}></div>
        </div>
    )
}
let BlockOnOffRed = () => {
    return (
        <div className={s.container}>
            <div className = {s.onBlock}>On</div>
            <div className={s.offBlockActive}>Off</div>
            <div className={s.circleRed}></div>
        </div>
    )
}*/
