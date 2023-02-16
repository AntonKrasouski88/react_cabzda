import React, { useRef, useState } from 'react';


const Input = () => {
    
    const [value,setValue] = useState('')
    const val = useRef<HTMLInputElement>(null);
    const onClickHandler = () => {
        const el = val.current  as HTMLInputElement;
        setValue(el.value)
    }
    
    return (
        <div>
            <input ref={val} />
            <button onClick={onClickHandler}>save</button>
            This is value: {value}
        </div>
    );
};

export default Input;