// actions.js
// src/redux/actions.js
export const addTask = (title) => ({
    type: 'ADD_TASK',
    payload: { title },
  });
  
  export const editTask = (id, title) => ({
    type: 'EDIT_TASK',
    payload: { id, title },
  });
  
  export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: { id },
  });
  
  export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    payload: { id },
  });
  
  export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: { filter },
  });
  