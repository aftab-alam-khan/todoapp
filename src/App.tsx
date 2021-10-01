import { useState } from 'react';
import ToDo from './ToDo'



function App() {

  const [, setNewToDo] = useState("test new to do")
  const [inputText, setInputText] = useState('')
  const [toDoList, setToDoList] = useState<string[]>([])
  let disabledButton = (inputText.length === 0)


  
  
  
  return (
    
    <div>
      <input type='text' name='todo' placeholder='Enter your todo' onChange={(event) => {
        setInputText(event.target.value);
      }} value={inputText}></input>
      
      <button onClick={() => {
        setNewToDo(inputText);
        setToDoList([...toDoList, `${inputText}`])
        
        setInputText('');
      }} disabled={disabledButton}>Add ToDo</button>
      <ul>
        {toDoList.map((l, i) =>
          
          <ToDo key={i} text={l} />
        )
      }
      </ul>
      </div>
  );
}

export default App;
