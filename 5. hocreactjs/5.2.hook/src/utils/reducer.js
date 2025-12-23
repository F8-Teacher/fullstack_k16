export const reducer = (state, action) => {
  switch (action.type) {
    case "counter/increment": {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }
    case "todos/add": {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    }
    case "todos/delete": {
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    }
    case "todos/completed": {
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (action.payload === todo.id) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          }
          return { ...todo };
        }),
      };
    }
    default: {
      return state;
    }
  }
};
export const initialState = {
  count: 0,
  products: [],
  todoList: [],
};
