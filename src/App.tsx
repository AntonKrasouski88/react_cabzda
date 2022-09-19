import React, { useState } from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating, RatingType} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff"
import UncontrolledAccordion from "./Components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from './Components/Rating/UnContolledRating'


function App() {

    const [statusRating, setStatusRating] = useState<RatingType>(0);
    const [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(false);

 

    return (
        <div className={'App'}>
            <PageTitle title = "This is App component"/>
            <PageTitle title = "Hello User"/>
            <Rating value = {statusRating} 
                    changeRating = {setStatusRating}/>
            <Accordion titleValue = {"Menu"} 
                        collapsed = {collapsedAccordion}
                        changeCollapsed = {setCollapsedAccordion} />
            <UncontrolledAccordion titleValue={'Menu control'}/>
            <UncontrolledRating/>
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
