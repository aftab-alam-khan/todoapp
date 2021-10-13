import { useState } from 'react';
import ToDo from './ToDo'



function App() {

  const [inputText, setInputText] = useState('test new to do')
  const [toDoList, setToDoList] = useState<string[]>([])
  let disabledButton = (inputText.length === 0)

  return (
    
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        setToDoList([...toDoList, inputText])
        
        setInputText('');
      }}>
      <input type='text' name='todo' placeholder='Enter your todo' onChange={(event) => {
        setInputText(event.target.value);
      }} value={inputText}></input>
      
      <button  disabled={disabledButton}>Add ToDo</button>
      </form>
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
