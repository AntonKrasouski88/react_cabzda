import React, {useState} from "react";

type  UnControlledRating = {
}

type ValueType = 0 |1 | 2 | 3 | 4 | 5;

export function UnControlledRating(props: UnControlledRating) {
    const [value, setValue] = useState<ValueType>(0)
    return(<div>
    <Name/>
        <Star selected={value > 0}/><button onClick={()=>{setValue(1)}}>1</button>
        <Star selected={value > 1}/><button onClick={()=>{setValue(2)}}>2</button>
        <Star selected={value > 2}/><button onClick={()=>{setValue(3)}}>3</button>
        <Star selected={value > 3}/><button onClick={()=>{setValue(4)}}>4</button>
        <Star selected={value > 4}/><button onClick={()=>{setValue(5)}}>5</button>
    </div>);

 /*   if (props.value === 1) {
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
    )*/
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