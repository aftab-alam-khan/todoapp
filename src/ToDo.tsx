import { useState } from "react";


const ToDo = (props: any) => {

    const [line, setLine] = useState(false);
    const [fontStyle, setFontStyle] = useState(true)

    const strikeOut = () => {
        setLine(true);
        setFontStyle(false)
        
    };

    return (<li style={{ textDecoration: line? 'line-through': '', fontWeight: fontStyle? 'normal': 'bolder'}} onClick={strikeOut}>{props.text}</li>)
};

export default ToDo;