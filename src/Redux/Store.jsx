import { createStore } from 'redux';
import taskReducer from './Reducers';

// Load tasks from local storage
const loadTasksFromLocalStorage = () => {
  try {
    const serializedTasks = localStorage.getItem('tasks');
    if (serializedTasks === null) {
      return undefined;
    }
  } catch (err) {
    return undefined;
  }
};

// Save tasks to local storage
const saveTasksToLocalStorage = (tasks) => {
  try {
    const serializedTasks = JSON.stringify(tasks);
    localStorage.setItem('tasks', serializedTasks);
  } catch (err) {
    
  }
};

const persistedState = loadTasksFromLocalStorage();

const store = createStore(taskReducer, persistedState);

store.subscribe(() => {
  saveTasksToLocalStorage(store.getState().tasks);
});

export default store;

