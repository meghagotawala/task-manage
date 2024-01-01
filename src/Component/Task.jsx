// src/components/Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../Redux/Action';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    window.confirm("Are you sure delete this item:")
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    const newTitle = prompt('Enter a new title:', task.title);
    if (newTitle !== null) {
      dispatch(editTask(task.id, newTitle));
    }
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <div className=' mt-4 d-flex gap-4'>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}className=' fs-3'>{task.title}</span>
      <button onClick={handleEdit} className='semi-button'>Edit</button>
      <button onClick={handleDelete} className='semi-button'>Delete</button>
    </div>
  );
};

export default Task;
