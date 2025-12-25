import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./store/middlewares/thunkMiddleware";

//Thunk function
export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  console.log(todoList);
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <div>
      <h1>Todo List</h1>
      {todoList.map((todo) => (
        <h3 key={todo.id}>{todo.title}</h3>
      ))}
    </div>
  );
}

//UI -> Call API -> Dispatch  --> x
//UI -> Dispatch -> Middleware -> Call API -> Dispatch -> Reducer
