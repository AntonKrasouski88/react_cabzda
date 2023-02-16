import React from "react";

export type RatingType  = 0 | 1 | 2 | 3 | 4 | 5


type RatingPropsType  = {
    value: RatingType;
    changeRating: (value: RatingType) => void
}

export function Rating(props: RatingPropsType) {
    
    return (
        <div>
            <Name/>
            <Star 
                selected = {props.value > 0}
                changeRating = {props.changeRating}
                value = {1}/>
            <Star 
                selected = {props.value > 1}
                changeRating ={props.changeRating}
                value = {2}/>
            <Star 
                selected = {props.value > 2}
                changeRating ={props.changeRating}
                value = {3}/>
            <Star 
                selected = {props.value > 3}
                changeRating ={props.changeRating}
                value = {4}/>
            <Star 
                selected = {props.value > 4}
                changeRating ={props.changeRating}
                value = {5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean;
    changeRating: (value: RatingType)=>void
    value: RatingType
}

let Name = () => <h3>List star</h3>;


let Star = (props: StarPropsType) => {
    const styleStar = {
        marginLeft: '10px',
    }
   return <span style = {styleStar} onClick = {()=>props.changeRating(props.value)}>{props.selected ? <b> Star </b>: 'Star'}</span>
}

//"../src/**/*.stories.mdx",