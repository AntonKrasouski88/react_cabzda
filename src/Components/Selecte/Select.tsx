import React, { useState } from 'react';
import { ItemType } from '../../App';
import style from './Select.module.css'

type SelectPropsType = {
    items: ItemType[],
    value: string,
    onChangeValue: Function
}

const Select = (props: SelectPropsType) => {
    const [select, setSelect] = useState(false);
    const selectMenu = props.items.map(el => {
    const onClickHandler = () => {
            props.onChangeValue(el.city)
            setSelect(false);
        }
        return (
            <li key={el.id} onClick = {onClickHandler} className={style.item}>
                {el.id}. City: {el.city}
            </li>
        )
    })
    const onClickMenuHandler = () => {
        setSelect(!select)
    }


    return (
        <div>
            <div>{props.value}<button onClick={onClickMenuHandler}>^</button></div>
            {select ? selectMenu : ''}
        </div>
    );
};

export default Select;