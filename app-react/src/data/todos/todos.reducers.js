import TODOS from 'data/todos/todos.constants';

const todos = (state = [], { type, payload }) => {

  switch(type) {
    case TODOS.CREATE_TODO:
      return state.concat(payload);
    case TODOS.UPDATE_TODO:
      return state.map(todo => todo._id === payload._id ? payload : todo);
    case TODOS.DELETE_TODO:
      return state.filter(todo => todo._id !== payload._id);
    default: 
      return state;
  }

};

export default todos;