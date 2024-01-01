// TaskList.js
import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = () => {
  const tasks = useSelector((state) => {
    if (state.filter === 'all') {
      return state.tasks;
    } else if (state.filter === 'completed') {
      return state.tasks.filter((task) => task.completed);
    } else {
      return state.tasks.filter((task) => !task.completed);
    }
  });

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;

