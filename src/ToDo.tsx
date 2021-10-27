
interface propsInterface{
    text: string,
    completed: any,
    id: number,
    done: boolean
}

const ToDo = (props: propsInterface) => {

    const strikeOut = () => {
        props.completed(props.id);
    };

    return (
        
        <li style={{
            textDecoration: props.done ? 'line-through': '',
            fontWeight: props.done ? 'bolder' : 'normal',
            wordWrap: "break-word",
            }} onClick={strikeOut}>{props.text}</li> )
};

export default ToDo;
