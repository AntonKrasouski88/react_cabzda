import React from "react";

type RatingPropsType  = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}

export function Rating(props: RatingPropsType) {
    if (props.value === 1) {
        return <div>
            <Name/>
            <Star selected = {true}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
        </div>
    }
    if (props.value === 2) {
        return <div>
            <Name/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
        </div>
    }
    if (props.value === 3) {
        return <div>
            <Name/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
        </div>
    }
    if (props.value === 4) {
        return <div>
            <Name/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {false}/>
        </div>
    }
    if (props.value === 5) {
        return <div>
            <Name/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {true}/>
        </div>
    }

    return (
        <div>
            <Name/>
            <Star selected = {false}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean;
}

let Name = () => <h3>List star</h3>;

let Star = (props: StarPropsType) => {
    //debugger
    console.log("Star rendering");
    if (props.selected){
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }

}