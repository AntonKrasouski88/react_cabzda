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
    const [statusOnOff,setStatusnOnOff] = useState<boolean>(false);
    const itemsSelect: ItemType[] = [{id: 1, city: 'Minsk'}, {id: 2, city: 'Brest'}, {id:3, city: 'Grodno'}]
    const [value, setValue] = useState('None');

    const PageTitleMemo = React.memo(PageTitle);
    const RatingMemo = React.memo(Rating);
    const AccordionMemo = React.memo(Accordion);
    const UncontrolledAccordionMemo = React.memo(UncontrolledAccordion);
    const UncontrolledRatingMemo = React.memo(UncontrolledRating)
    const ControledOnOffMemo = React.memo(ControledOnOff);
    const OnOffMemo = React.memo(OnOff);
    const InputMemo = React.memo(Input);
    const SelectMemo = React.memo(Select);

    return (
        <div className={'App'}>
            <PageTitleMemo title = "This is App component"/>
            <PageTitleMemo title = "Hello User"/>
            <RatingMemo value = {statusRating}
                    changeRating = {setStatusRating}/>
            <AccordionMemo titleValue = {"Menu"}
                       collapsed = {collapsedAccordion}
                       changeCollapsed = {setCollapsedAccordion} />
            <UncontrolledAccordionMemo titleValue={'Menu control'}/>
            <UncontrolledRatingMemo/>
            <ControledOnOffMemo
                status = {statusOnOff}
                changestatus={setStatusnOnOff}/>
            <OnOffMemo />
            <OnOffMemo />
            <InputMemo />
            <SelectMemo items={itemsSelect} value = {value} onChangeValue={setValue}/>
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

