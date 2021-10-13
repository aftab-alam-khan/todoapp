import { useState } from "react";


const ToDo = (props: {text:string}) => {


    const [done, setDone] = useState(false);

    const strikeOut = () => {
        setDone(!done)
    };

    return (<li style={{
        textDecoration: done ? 'line-through' : '',
        fontWeight: done ? 'bolder': 'normal' 
    }} onClick={strikeOut}>{props.text}</li>)
};

export default ToDo;