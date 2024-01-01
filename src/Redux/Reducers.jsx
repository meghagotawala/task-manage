// reducers.js
// src/redux/reducers.js
const initialState = {
    tasks: [],
    filter: 'all',
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, { id: Date.now(), title: action.payload.title, completed: false }],
        };
  
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id ? { ...task, title: action.payload.title } : task
          ),
        };
  
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload.id),
        };
  
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id ? { ...task, completed: !task.completed } : task
          ),
        };
  
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload.filter,
        };
  
      default:
        return state;
    }
  };
  
  export default taskReducer;
  
  