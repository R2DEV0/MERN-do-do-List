import React, {useState} from 'react';


const Task =(props) => {
    const{list, setList, task, index} = props;


const removeTask = () => {
    setList(() =>{
        return list.filter(task => list.indexOf(task) !== index)
    });
};

const onChange = () => {
    list[index].isComplete = !list[index].isComplete;
    setList([...list]);
    console.log(list[index].isComplete)
};


    return(
        <div className='container alert alert-success' role='alert' style= {{marginTop: '10px' }}  >
            <h3 style={{ marginBottom: '15px', textDecoration: task.isComplete ? 'line-through' : 'none' }} > {task.desc} </h3>
            <label htmlFor='completed'>Completed? </label>
            <input type='checkbox' name='completed' checked={task.isComplete} onChange={onChange} style={{ marginRight: '15px' }}/>
            <button className='btn btn-dark btn-sm' onClick= {removeTask}>Delete</button>
        </div>
    )
}

export default Task;