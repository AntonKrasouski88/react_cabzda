import React, {useState} from "react";

type  UncontrolledRating = {

}

type ValueType = 0 |1 | 2 | 3 | 4 | 5;


export function UncontrolledRating(props: UncontrolledRating) {
    const [value, setValue] = useState<ValueType>(0)
    //const onClickHandler = (value: ValueType) => setValue(value)

    return (<div>
        <Name/>
        <Star selected={value > 0}
              onClick={() => setValue (1)}/>
        <Star
            selected={value > 1}
            onClick={() => setValue (2)}/>
        <Star
            selected={value > 2}
            onClick={() => setValue (3)}/>
        <Star
            selected={value > 3}
            onClick={() => setValue (4)}/>
        <Star
            selected={value > 4}
            onClick={() => setValue (5)}/>
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
    return <span style = {styleStar} onClick={ props.onClick }>{props.selected ? <b>Star </b>: 'Star' }</span>
}