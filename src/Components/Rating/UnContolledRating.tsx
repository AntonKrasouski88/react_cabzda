import React, {useState} from "react";

type  UnControlledRating = {

}

type ValueType = 0 |1 | 2 | 3 | 4 | 5;


export function UnControlledRating(props: UnControlledRating) {
    const [value, setValue] = useState<ValueType>(0)
    const onClickHandler = (value: ValueType) => () => setValue(value)

    return (<div>
        <Name/>
        <Star selected={value > 0}
              onClick={() => {onClickHandler(1)}}/>
        <Star
            selected={value > 1}
            onClick={() => {onClickHandler(2)}}/>
        <Star
            selected={value > 2}
            onClick={() => {onClickHandler(3)}}/>
        <Star
            selected={value > 3}
            onClick={() => {onClickHandler(4)}}/>
        <Star
            selected={value > 4}
            onClick={() => {onClickHandler(5)}}/>
    </div>);

}

type StarPropsType = {
    selected: boolean
    onClick: ()=>void;

}

let Name = () => <h3>List star</h3>;

let Star = (props: StarPropsType) => {
    const styleStar = {
        display: 'inline-block',
        margin: '2px'
    }
    return <div style = {styleStar} onClick={props.onClick}>{props.selected ? <span><b>star </b></span>: <span>star </span>}</div>
}