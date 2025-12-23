/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from "react";
import TodoAdd from "./components/Todos/TodoAdd";
import TodoList from "./components/Todos/TodoList";
import { initialState, reducer } from "./utils/reducer";
export const TodoContext = createContext();
export default function TodoReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Todo App</h1>
      <TodoContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <TodoList />
        <TodoAdd />
      </TodoContext.Provider>
    </div>
  );
}
