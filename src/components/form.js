import React,{useState} from 'react';

const Form = (props) =>{
    const{list, setList, task} = props;


const onChange = (e) => {
    task.desc = e.target.value;
}

const onClick = (e) => {
    e.preventDefault();
    setList([...list, task])
    
};


    return(
        <div className='container w-50 mt-4'>
            <h2>Kevin's To-Do List</h2>
            <input className="form-control" type='text' onChange={onChange} name='task' />
            <input className='btn btn-success btn-block mt-1' type='submit' value='Add Task' onClick={onClick} />
        </div>
    )
}

export default Form;