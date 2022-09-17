import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
}

export const OnOff = (props:OnOffPropsType) => {
    let [condition,setCondition] = useState<boolean>(false);
    console.log(condition)

    return (
        <div>
            <div className={s.container}>

                <div onClick={()=> {setCondition(true)}} className={condition ? s.onBlockActive: s.onBlock}>On</div>
                <div onClick={()=> {setCondition(false)}} className={!condition ? s.offBlockActive: s.onBlock}>Off</div>
                <div className={condition ? s.circleGreen: s.circleRed}></div>
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
