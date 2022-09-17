import React, {useState} from "react";

type ControlledAccordionPropsType = {
    titleValue: string;
}

function ControlledAccordion(props: ControlledAccordionPropsType) {
    const style = {
        border: 'solid 1px black'
    }
    const [onOffMenu, setOnOffMenu] = useState<boolean>(false)

    const onClickHandler = ()=> !onOffMenu ? setOnOffMenu(true): setOnOffMenu(false)
    return <div style={style}>
        <AccordionTitle title={props.titleValue}/><button onClick={onClickHandler}>collapse</button>
        {onOffMenu && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string;
}

let AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return <h3> {props.title} </h3>
}
let AccordionBody = () => {
    console.log("AccordionBody rendering")
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

export default ControlledAccordion