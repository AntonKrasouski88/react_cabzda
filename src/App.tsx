import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff"
import ControlledAccordion from "./Components/Accordion/ControlledAccordion";
import {UnControlledRating} from "./Components/Rating/UnContolledRating";


function App() {

    return (
        <div className={'App'}>
            <PageTitle title = "This is App component"/>
            <PageTitle title = "Hello User"/>
            <Rating value = {3}/>
            <Accordion titleValue = {"Menu first"} collapsed = {true}/>
            <Accordion titleValue = {"Menu Second"} collapsed = {false}/>
            <ControlledAccordion titleValue={'Menu control'}/>
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
            <UnControlledRating/>
            <OnOff />
            <OnOff />
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

let PageTitle = (props: PageTitlePropsType) => {
    return <h1>{ props.title }</h1>
}
console.log("PageTitle rendering")

export default App;
