import React, {useState} from "react";

type ControlledAccordionPropsType = {
    titleValue: string;
}

function ControlledAccordion(props: ControlledAccordionPropsType) {
    const style = {
        border: 'solid 1px black'
    }
    const [onOffMenu, setOnOffMenu] = useState<boolean>(false)
    const onClickHandler = ()=> setOnOffMenu(!onOffMenu)

    return <div style={style}>
        <AccordionTitle onClick = {onClickHandler} title={props.titleValue}/>
        {onOffMenu && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string;
    onClick: ()=>void
}

let AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={props.onClick}> {props.title} </h3>
}
let AccordionBody = () => {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

export default ControlledAccordion