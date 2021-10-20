import { useState } from "react";

interface propsInterface{
    text: string,
    completed: any,
    id: number,
    done: boolean
}

const ToDo = (props: propsInterface) => {
    
    // const [done, setDone] = useState(false);

    const strikeOut = () => {
        // setDone(!props.done);
        props.completed(props.id, props.done);
    };

    return (
        <li style={{
        textDecoration: props.done ? 'line-through': '',
        fontWeight: props.done ? 'bolder': 'normal'
        }} onClick={strikeOut}>{props.text}</li>)
};

export default ToDo;