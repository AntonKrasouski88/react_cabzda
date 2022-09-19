import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    changeCollapsed: (value: boolean)=>void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title={props.titleValue}
        changeCollapsed = { props.changeCollapsed}
        collapsed = {props.collapsed}/>
        {!props.collapsed && <AccordionBody/>}
    </div>

 /*   if (props.collapsed) {
        return <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    }*/
}

type AccordionTitlePropsType = {
    title: string;
    collapsed: boolean
    changeCollapsed: (value: boolean)=>void
}

let AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={() => props.changeCollapsed(!props.collapsed)}> {props.title} </h3>
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

export default Accordion