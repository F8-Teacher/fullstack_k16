import { useEffect, useRef, useState } from "react";
import User from "./User";
type Todo = {
  id: number;
  title: string;
};
export type User = {
  id: number;
  name: string;
};
export default function Todos() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [user, setUser] = useState<User>({} as User);
  useEffect(() => {
    const getTodoList = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      const data: Todo[] = await response.json();
      setTodoList(data);
    };
    getTodoList();
    if (buttonRef.current) {
      buttonRef.current.style.color = "red";
    }
  }, []);
  return (
    <div>
      <h1>TodoList</h1>
      <p>{user.name}</p>
      {todoList.map((todo) => (
        <h3 key={todo.id}>{todo.title}</h3>
      ))}
      <button ref={buttonRef}>Click me</button>
      <User name="Hoàng An" email="hoangan.web@gmail.com" setUser={setUser} />
    </div>
  );
}
