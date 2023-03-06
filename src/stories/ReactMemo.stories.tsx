import React, {useState} from "react";

export default  {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}
const SecretUsers = (props:{users:string[]}) => {
    console.log('called')
    return <div>
        {props.users.map((el,i)=> <div key = {i}>{el}</div>)}
    </div>
}

const User = React.memo(SecretUsers)
export const example1 = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [users,setUsers] = useState(['Anna', 'Victoria', 'Luisa']);

    return <>
        <button onClick={()=>setCount(count+1)}>+</button>
       <NewMessagesCounter count={count}/>
       <User users={users}/>
    </>
}