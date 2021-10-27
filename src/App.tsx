import { useState, useEffect } from 'react';
import './index.css'
import ToDo from './ToDo';
import { useUpdateTitle } from './hooks/changeTitle';
import { useUpdateDataBase } from './hooks/saveDataBase';
import { fetchDataBase } from './hooks/fetchDataBase';

function App() {

  const [inputText, setInputText] = useState('');
  const [toDoLists, setToDoLists] = useState<string[]>([]);
  const [deleteListItem, setdeleteListItem] = useState<number[]>([]);
  const [loading, setLoading] = useState(true)
  let disabledButton = (inputText.length === 0);
  let disabledReset = (deleteListItem.length === 0);

  useEffect(() => {
    
    fetchDataBase(['our-item-key', 'delete-item-key'])
      .then((data) => {

        const toDoLists:any = data[0];
        const deleteListItem: any = data[1];
        
        setToDoLists(toDoLists);
        setdeleteListItem(deleteListItem);
        setLoading(false)
      });
  }, [])
  
  useUpdateDataBase(toDoLists, deleteListItem);

  useUpdateTitle(toDoLists, deleteListItem);
  

  return (
    <div className='list'>
      <h2>Todo List</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        setToDoLists([...toDoLists, inputText])
        setInputText('');
      }}>
        <div className='formData'>
          <input type='text' name='todo' placeholder='Enter your todos' onChange={(event) => {
            setInputText(event.target.value);
          }} value={inputText}></input>
          <button disabled={disabledButton}>Add ToDo</button>
        </div>
      </form>
      {loading ? (<img src="/img/loading.gif" alt="img" />) : (
      
          <ul>
            {toDoLists.map((toDoList, index) =>
              <ToDo key={index} text={toDoList} id={index}
                done={deleteListItem.includes(index)}
                completed={(id: number) => {
                  if (deleteListItem.includes(index)) {

                    const rawdeleteListItem = deleteListItem.filter(item => item !== id);
                    setdeleteListItem([...rawdeleteListItem])
                  } else {
                    setdeleteListItem([...deleteListItem, id])
                  }
                }} />
            )
            }
        </ul>
      )}
      <button id='delete' disabled={disabledReset} onClick={() => {

        const rawdeleteListItem = toDoLists.filter((item, index) => deleteListItem.indexOf(index) === -1)
        setToDoLists([...rawdeleteListItem])
        setdeleteListItem([])
      }
      }>Delete</button>
    </div>
  );
}

export default App;
