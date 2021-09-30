

import { useState } from 'react';

function App() {

  // let newToDo = "test new to do";

  const [newToDo, setNewToDo] = useState("test new to do")

  const [inputText, setInputText] = useState('')

  let disabledButton = (inputText.length === 0) 



  console.log('outside return', newToDo);
  

  return (
    
    <div>
      <input type='text' name='todo' placeholder='Enter your todo' onChange={(event) => {
        // console.log(event.target.value);
        setInputText(event.target.value);
        
        
      }} value={inputText}></input>
      
      <button onClick={() => {
        // const elementTextBox = document.querySelector('[name="todo"]') as any;
        
        // setNewToDo(elementTextBox.value);
        setNewToDo(inputText);

        setInputText('');
        
        console.log(newToDo);
        
      }} disabled={ disabledButton }>Add ToDo</button>
      { newToDo }
      </div>
  );
}

export default App;
