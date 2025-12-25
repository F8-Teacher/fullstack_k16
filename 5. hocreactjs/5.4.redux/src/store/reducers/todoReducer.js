const initialState = {
  todoList: [],
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/init-data": {
      return {
        ...state,
        todoList: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
