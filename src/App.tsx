import { useState } from 'react';
import ToDo from './ToDo'



function App() {

  const [inputText, setInputText] = useState('')
  const [toDoList, setToDoList] = useState<string[]>([])
  const [reset, setReset] = useState(true);
  let disabledButton = (inputText.length === 0)
  let disabledReset = (reset)
  
  

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
          
          <ToDo key={i} text={l} complete={(value: boolean) => {
            setReset(value)
            
          }} />
        )
      }
      </ul>
      <button disabled={disabledReset} onClick={() => setReset(!reset)}>Reset</button>

      {/* add the button that will remove all strike out from the list
      try to bring the all states in app page
      check more about the useEffect react hook so that when we */}

      </div>
  );
}

export default App;
