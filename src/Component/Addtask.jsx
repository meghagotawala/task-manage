// AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/Action';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title.trim() !== '') {
      dispatch(addTask(title));
      setTitle('');
    }
  };

  return (
    <div className='my-4'>
      <input
      className=' p-2' 
      style={{width:270}}
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd} className='button'>Add Task</button>
    </div>
  );
};

export default AddTask;
