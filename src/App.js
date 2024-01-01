import React from 'react';
import TaskList from './Component/TaskList';
import { useDispatch } from 'react-redux';
import { addTask, setFilter } from './Redux/Action';
import AddTask from './Component/Addtask';

const App = () => {
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const title = prompt('Enter a new task:');
    if (title !== null) {
      dispatch(addTask(title));
    }
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className=' main'>
      <h1 className=' text-center'>Task Manager</h1>
      <AddTask/> 
      <button value='all' onClick={handleFilterChange} className='button'>All</button>
      <button value='completed' onClick={handleFilterChange} className='button'>Completed</button>
      <button value='uncompleted' onClick={handleFilterChange} className='button'>Uncompleted</button>
      <TaskList />
    </div>
  );
};

export default App;


