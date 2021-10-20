import { useState } from "react";

interface propsInterface{
    text: string,
    complete: any
}

const ToDo = (props: propsInterface) => {
    const [done, setDone] = useState(false);

    const strikeOut = () => {
        setDone(!done)
        props.complete(done);
    };

    return (
        <li style={{
        textDecoration: done ? 'line-through': '',
        fontWeight: done ? 'bolder': 'normal'
        }} onClick={strikeOut}>{props.text}</li>)
};

export default ToDo;