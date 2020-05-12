import React,{useState} from 'react';
import './App.css';
import Form from './components/form';
import Task from './components/task'

function App() {

  const [list, setList] = useState([]);
    let task = {
      desc: "",
      isComplete: false
    }

  return (
    <div className="App">
      <div>
        <Form list={list} setList= {setList} task={task} />
      </div>
      <div>
        {list.map((task, i) => (<Task task={task} list={list} setList={setList} index={i} />))} 
      </div>

    </div>
  );
}

export default App;
