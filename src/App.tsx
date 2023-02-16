import React, { useState } from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating, RatingType} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff"
import UncontrolledAccordion from "./Components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from './Components/Rating/UncontolledRating'
import {ControledOnOff} from './Components/OnOff/ContoledOnOff'
import Input from './Components/Input/Input';
import Select from './Components/Selecte/Select';

export type ItemType ={
    id: number,
    city: string,
}
function App() {
    
    const [statusRating, setStatusRating] = useState<RatingType>(0);
    const [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(false);
    const [conditionOnOff,setConditionOnOff] = useState<boolean>(false);
    const itemsSelect: ItemType[] = [{id: 1, city: 'Minsk'}, {id: 2, city: 'Brest'}, {id:3, city: 'Grodno'}]
    const [value, setValue] = useState('None');

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
            <ControledOnOff
                condition = {conditionOnOff}
                changeConditione = {setConditionOnOff}/>
            <OnOff />
            <OnOff />
            <Input />
            <Select items={itemsSelect} value = {value} onChangeValue={setValue}/>
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

