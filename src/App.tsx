import { useState } from 'react';
import ToDo from './ToDo'



function App() {

  const [inputText, setInputText] = useState('')
  const [toDoLists, setToDoLists] = useState<string[]>([])
  const [deleteListItem, setdeleteListItem] = useState<number[]>([]);
  let disabledButton = (inputText.length === 0)
  let disabledReset = (deleteListItem.length === 0)

  return (
    
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        setToDoLists([...toDoLists, inputText])
        
        setInputText('');
      }}>
      <input type='text' name='todo' placeholder='Enter your todos' onChange={(event) => {
        setInputText(event.target.value);
      }} value={inputText}></input>
      
      <button  disabled={disabledButton}>Add ToDo</button>
      </form>
      <ul>
        {toDoLists.map((toDoList, index) =>
          
          <ToDo key={index} text={toDoList} id={index}
            done={deleteListItem.includes(index)}
            completed={(id: number, status: boolean) => {

            if (status){
              const rawdeleteListItem = deleteListItem.filter(item => item !== id);
              
              setdeleteListItem([...rawdeleteListItem])
            } else {
              setdeleteListItem([...deleteListItem, id])
            }
          }} />
        )
      }
      </ul>
      <button disabled={disabledReset} onClick={() => {
        
        const rawdeleteListItem = toDoLists.filter( (item, index) => deleteListItem.indexOf(index) === -1)
        
        setToDoLists([...rawdeleteListItem])
        setdeleteListItem([])
      }
      }>Delete</button>

      </div>
  );
}

export default App;
